interface TaskData {
    id: string,
    value: string,
}

interface TaskComponent {
    task: TaskData,
    index: number,
    draggableId: string,
}
  
interface ColumnData {
    id: string,
    name: string,
    tasks: TaskData[],
}

interface ColumnComponent {
    column: ColumnData,
    index: number,
}
  
interface BoardData {
    columns: ColumnData[],
}

interface TaskModalProps {
    show: boolean,
    handleClose: () => void,
}

export type {
    TaskData,
    TaskComponent,
    ColumnData,
    ColumnComponent,
    BoardData,
    TaskModalProps
}