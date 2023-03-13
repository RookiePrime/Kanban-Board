interface TaskData {
    id: string,
    value: string,
}

interface TaskComponent {
    task: TaskData,
    index: number,
    draggableId: string,
    columns: ColumnData[],
    setColumns: React.Dispatch<React.SetStateAction<ColumnData[]>>,
}
  
interface ColumnData {
    id: string,
    name: string,
    tasks: TaskData[],
}

interface ColumnComponent {
    column: ColumnData,
    index: number,
    columns: ColumnData[],
    setColumns: React.Dispatch<React.SetStateAction<ColumnData[]>>
}
  
interface BoardData {
    columns: ColumnData[],
}

interface TaskModalProps {
    show: boolean,
    handleClose: () => void,
    columns: ColumnData[],
    setColumns: React.Dispatch<React.SetStateAction<ColumnData[]>>
}

export type {
    TaskData,
    TaskComponent,
    ColumnData,
    ColumnComponent,
    BoardData,
    TaskModalProps
}