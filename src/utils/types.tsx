interface TaskData {
    id: string;
    value: string;
}

interface TaskComponent {
    task: TaskData;
    index: number;
    draggableId: string;
}
  
interface ColumnData {
    id: string,
    name: string,
    tasks: TaskData[],
}
  
interface BoardData {
    columns: ColumnData[]
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
    BoardData,
    TaskModalProps
}