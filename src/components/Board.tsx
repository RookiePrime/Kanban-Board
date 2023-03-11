import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { DragDropContext } from '@hello-pangea/dnd';
import { onDragEnd } from '../utils';
import { Column } from "./";
import { BoardData, ColumnData } from "../utils";
import { TaskModal } from './TaskModal';

export const Board = (boardData:BoardData) => {
    const [ columns, setColumns ] = useState<ColumnData[]>(boardData.columns);
    const [ show, setShow ] = useState<boolean>(false);

    const handleClose:() => void = () => setShow(false);
    const handleShow:() => void = () => setShow(true);

    return (
        <div className='d-flex justify-content-center w-50 h-100'>
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {columns.map(({ id, tasks, name}, index) =>
                    <Column key={index} id={id} tasks={tasks} name={name}></Column>
                )}
            </DragDropContext>
            <Button className='align-self-end' onClick={handleShow}></Button>
            <TaskModal show={show} handleClose={handleClose} columns={columns} setColumns={setColumns}></TaskModal>
        </div>
    )
}