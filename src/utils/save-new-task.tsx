import { v4 as uuid } from 'uuid';
import { ColumnData, TaskData } from "./types";

export const saveNewTask = (
    columns:ColumnData[], 
    taskText:string, 
    handleClose:() => void, 
    setColumns:React.Dispatch<React.SetStateAction<ColumnData[]>>,
    setTaskText:React.Dispatch<React.SetStateAction<string>>
 ) => {
    
    const copyColumns = structuredClone(columns);
    let indexOfRequested:number = -1;
    
    const newTask:TaskData = {
        id: uuid(),
        value: taskText
    }

    const [requestedColumn] = copyColumns.filter((column:ColumnData, index:number) => {
        if (column.name === 'Requested') indexOfRequested = index;
        return column.name === 'Requested';
    })

    requestedColumn.tasks.push(newTask)

    const newColumns = copyColumns.map((column:ColumnData, index:number) => 
        index === indexOfRequested ? requestedColumn : column);

    setColumns(newColumns);
    setTaskText('');
    handleClose();
}