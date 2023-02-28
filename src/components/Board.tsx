import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from "./Column";
import { BoardData } from "../utils/types";

export const Board = (boardData: BoardData) => {
    return (
        <div className='d-flex justify-content-center w-50 h-100'>
            <DragDropContext onDragEnd={result => console.log(result)}>
                {boardData.columns.map((column, index) => {
                    return <Column key={index} id={column.id} name={column.name} tasks={column.tasks}></Column>
                })}
            </DragDropContext>
        </div>
    )
}