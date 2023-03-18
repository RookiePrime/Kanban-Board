import { ColumnData } from "./types";

const setLocalStorage = (data:ColumnData[]) => localStorage.setItem('boardData', JSON.stringify({columns:data}));

const getLocalStorage = (key:string) => localStorage.getItem(key);

export {
    getLocalStorage,
    setLocalStorage,
};