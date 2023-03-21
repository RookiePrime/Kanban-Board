import { useState } from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Column } from "./";
import { TaskModal } from './TaskModal';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { taskMoved } from '../features/board/board-slice';

export const Board = () => {
    const [ show, setShow ] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const board = useAppSelector(state => state.board);

    const handleClose:() => void = () => setShow(false);
    const handleShow:() => void = () => setShow(true);

    const handleDragEnd = (result: DropResult) => {
        dispatch(taskMoved(result));
    }

    return (
        <Container className='d-flex flex-column align-items-center justify-content-between'>
            <Row className='d-flex'>
                <DragDropContext onDragEnd={result => handleDragEnd(result)}>
                    <Container>
                        <Row className='d-flex justify-content-center'>
                            {board.columns.map((column, index) =>
                                <Column 
                                    key={index} 
                                    column={column} 
                                    index={index}
                                ></Column>
                            )}
                        </Row>
                    </Container>
                </DragDropContext>
                <TaskModal show={show} handleClose={handleClose}></TaskModal>
            </Row>
            <Row className='d-flex justify-content-center w-100'>
                <Button onClick={handleShow}>Create New Task</Button>
            </Row>
        </Container>
    )
}