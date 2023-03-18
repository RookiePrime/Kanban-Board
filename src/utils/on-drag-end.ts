import { DropResult } from "@hello-pangea/dnd";
import { ColumnData, setLocalStorage, TaskData } from ".";

export const onDragEnd = (result:DropResult, columns:ColumnData[], setColumns:React.Dispatch<React.SetStateAction<ColumnData[]>>) => {  
    
    const copyColumns:ColumnData[] = structuredClone(columns)
    const { source, destination, draggableId } = result;
    
    if (!destination ||
        (destination.droppableId === source.droppableId && destination.index === source.index)
        ) return;

    const [sourceColumn] = copyColumns.filter(column => column.id === source.droppableId);
    const [movingTask] = sourceColumn.tasks.filter(task => task.id === draggableId);
    const newSourceTasks:TaskData[] = sourceColumn.tasks.filter(task => task.id !== draggableId);
    sourceColumn.tasks = newSourceTasks;

    const [destinationColumn] = source.droppableId === destination.droppableId 
    ? [sourceColumn]
    : copyColumns.filter(column => column.id === destination.droppableId);

    const newDestinationTasks:TaskData[] = [...destinationColumn.tasks];
    newDestinationTasks.splice(destination.index, 0, movingTask);
    destinationColumn.tasks = newDestinationTasks;

    const newColumns:ColumnData[] = copyColumns.map(column => {
        if (column.id === destination.droppableId) {
            return destinationColumn
        }
        if (column.id === source.droppableId) {
            return sourceColumn
        }
        return column;
    })

    setColumns(newColumns);
    setLocalStorage(newColumns);
}