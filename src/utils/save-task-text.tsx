import { ColumnData, TaskData } from "./types";

export const saveTaskText = (
    columns: ColumnData[], 
    id:string, 
    taskText:string, 
    setColumns:React.Dispatch<React.SetStateAction<ColumnData[]>>, 
    setEditingText:React.Dispatch<React.SetStateAction<boolean>>
) => {

    const copyColumns:ColumnData[] = structuredClone(columns);

    const [currentColumn] = 
        copyColumns.filter((column:ColumnData) => 
            column.tasks.filter(task => task.id === id).length != 0);

    const newTask:TaskData = {
        id,
        value: taskText
    };

    const newColumns:ColumnData[] = copyColumns.map((column:ColumnData) => {
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

    setColumns(newColumns);
    setEditingText(false);
}