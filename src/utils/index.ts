import { onDragEnd } from "./on-drag-end";
import { saveNewTask } from "./save-new-task";
import { saveTaskText } from "./save-task-text";
import { setLocalStorage, getLocalStorage } from "./local-storage";
import { data } from "./test-data";
import { boardData } from "./board-data";
import { 
    TaskData, 
    TaskComponent, 
    ColumnData, 
    ColumnComponent,
    BoardData, 
    TaskModalProps,
} from "./types";

export {
    onDragEnd,
    saveNewTask,
    saveTaskText,
    boardData,
    data,
    setLocalStorage,
    getLocalStorage,
}
export type {
    TaskData,
    TaskComponent,
    ColumnData,
    ColumnComponent,
    BoardData,
    TaskModalProps
}