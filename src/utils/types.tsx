interface TaskData {
    id: string;
    value: string;
}

interface TaskComponent {
    task: TaskData;
    index: number;
}
  
interface ColumnData {
    id: string,
    name: string,
    tasks: TaskData[],
}
  
interface BoardData {
    columns: ColumnData[]
}

export type {
    TaskData,
    TaskComponent,
    ColumnData,
    BoardData
}