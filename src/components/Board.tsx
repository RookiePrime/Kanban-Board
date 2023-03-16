import { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
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
        <div className='d-flex flex-column align-items-center h-100'>
            <div className='d-flex h-100'>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    <Row>
                        {columns.map((column, index) =>
                            <Column 
                                key={index} 
                                column={column} 
                                columns={columns} 
                                index={index}
                                setColumns={setColumns}
                            ></Column>
                        )}
                    </Row>
                </DragDropContext>
                <TaskModal show={show} handleClose={handleClose} columns={columns} setColumns={setColumns}></TaskModal>
            </div>
            <Button className='w-50' onClick={handleShow}>Create New Task</Button>
        </div>
    )
}