import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import {
    BoardData,
    ColumnData,
    TaskData, 
    boardData, 
    getLocalStorage 
} from '../../utils';


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
        },
        taskMoved(state) {
            console.log('moving Task');
        },
        taskEdited(state) {
            console.log('editing Task');
        }
    }
});

export const {
    taskAdded,
    taskMoved,
    taskEdited
} = boardSlice.actions;
export default boardSlice.reducer;