import { Column } from "./Column";
import { BoardData } from "../utils/types";

export const Board = (boardData: BoardData) => {

    return <div className='d-flex justify-content-center w-100 h-100'>
        {Object.entries(boardData.columns).map((column, index) => {
            return <Column key={index} id={column[1].id} name={column[1].name} tasks={column[1].tasks}></Column>
        })}
    </div>
}