interface TaskData {
    id: string;
    value: string;
  }
  
interface ColumnData {
    id: string;
    name: string;
    tasks: TaskData[];
}
  
interface BoardData {
    columns: ColumnData[]
}

export type {
    TaskData,
    ColumnData,
    BoardData
}