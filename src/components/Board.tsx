import { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { onDragEnd } from '../utils';
import { Column } from "./";
import { BoardData, ColumnData } from "../utils";

export const Board = (boardData:BoardData) => {
    const [ columns, setColumns ] = useState<ColumnData[]>(boardData.columns);

    return (
        <div className='d-flex justify-content-center w-50 h-100'>
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {columns.map(({ id, tasks, name}, index) =>
                    <Column key={index} id={id} tasks={tasks} name={name}></Column>
                )}
            </DragDropContext>
        </div>
    )
}