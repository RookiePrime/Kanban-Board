import { useState } from 'react';
import { Container, Button, Row } from 'react-bootstrap';
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
        <Container className='d-flex flex-column align-items-center justify-content-between'>
            <Row className='d-flex'>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    <Container>
                        <Row className='d-flex justify-content-center'>
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
                    </Container>
                </DragDropContext>
                <TaskModal show={show} handleClose={handleClose} columns={columns} setColumns={setColumns}></TaskModal>
            </Row>
            <Row className='d-flex justify-content-center w-100'>
                <Button onClick={handleShow}>Create New Task</Button>
            </Row>
        </Container>
    )
}