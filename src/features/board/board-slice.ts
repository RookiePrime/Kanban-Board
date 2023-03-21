import { DropResult } from '@hello-pangea/dnd';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import {
    BoardData,
    ColumnData,
    TaskData, 
    boardData, 
    getLocalStorage,
    setLocalStorage 
} from '../../utils';

interface taskEditProps {
    taskText: string,
    id: string
}

const localStorage:string | null = getLocalStorage('boardData') || null;
const initialState: BoardData = localStorage !== null ? JSON.parse(localStorage) : boardData;

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        taskAdded(state, action: PayloadAction<string>) {
            const { columns } = state;

            let indexOfRequested:number = -1;
            
            const newTask:TaskData = {
                id: uuid(),
                value: action.payload
            }

            const [requestedColumn] = columns.filter((column:ColumnData, index:number) => {
                if (column.name === 'Requested') indexOfRequested = index;
                return column.name === 'Requested';
            })

            requestedColumn.tasks.push(newTask)

            const newColumns:ColumnData[] = columns.map((column:ColumnData, index:number) => 
                index === indexOfRequested ? requestedColumn : column);

            state.columns = newColumns;
            setLocalStorage(state.columns);
        },
        taskMoved(state, action: PayloadAction<DropResult>) {
            const { columns } = state;
            const { source, destination, draggableId } = action.payload;
            
            if (!destination ||
                (destination.droppableId === source.droppableId && destination.index === source.index)
                ) return;
        
            const [sourceColumn] = columns.filter(column => column.id === source.droppableId);
            const [movingTask] = sourceColumn.tasks.filter(task => task.id === draggableId);
            const newSourceTasks:TaskData[] = sourceColumn.tasks.filter(task => task.id !== draggableId);
            sourceColumn.tasks = newSourceTasks;
        
            const [destinationColumn] = source.droppableId === destination.droppableId 
            ? [sourceColumn]
            : columns.filter(column => column.id === destination.droppableId);
        
            const newDestinationTasks:TaskData[] = [...destinationColumn.tasks];
            newDestinationTasks.splice(destination.index, 0, movingTask);
            destinationColumn.tasks = newDestinationTasks;
        
            const newColumns:ColumnData[] = columns.map(column => {
                if (column.id === destination.droppableId) {
                    return destinationColumn
                }
                if (column.id === source.droppableId) {
                    return sourceColumn
                }
                return column;
            });

            state.columns = newColumns;
            setLocalStorage(state.columns);
        },
        taskEdited(state, action: PayloadAction<taskEditProps>) {
            const { columns } = state;
            const { payload } = action;
            const { taskText, id } = payload;

            const [currentColumn] = 
                columns.filter((column:ColumnData) => 
                    column.tasks.filter(task => task.id === id).length != 0);
        
            const newTask:TaskData = {
                id,
                value: taskText
            };
        
            const newColumns:ColumnData[] = columns.map((column:ColumnData) => {
                if (column.id === currentColumn.id) return {
                    id: currentColumn.id,
                    name: currentColumn.name,
                    tasks: currentColumn.tasks.map((task:TaskData) => {
                        if (task.id === id)
                            return newTask;
                        return task;
                    }),
                };
                return column;
            })

            state.columns = newColumns;
            setLocalStorage(state.columns);
        }
    }
});

export const {
    taskAdded,
    taskMoved,
    taskEdited
} = boardSlice.actions;
export default boardSlice.reducer;