import { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Column, Trashbin } from "./";
import { TaskModal } from './TaskModal';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { taskDeleted, taskMoved } from '../features/board/board-slice';


export const Board = () => {
    const [ show, setShow ] = useState<boolean>(false);
    const [ dragging, setDragging ] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const board = useAppSelector(state => state.board);

    const handleClose:() => void = () => setShow(false);
    const handleShow:() => void = () => setShow(true);

    const handleDragStart = () => setDragging(true);

    const handleDragEnd = (result: DropResult) => {
        setDragging(false);

        const { destination, source } = result;
        if (!destination ||
            (destination.droppableId === source.droppableId && destination.index === source.index)
            ) return;

        if (destination.droppableId === 'Trashbin') {
            dispatch(taskDeleted(result));
            return;
        }

        dispatch(taskMoved(result));
    }

    return (
        <Container className='d-flex flex-column align-items-center justify-content-between'>
            <Row className='d-flex w-100 flex-grow-1 mb-3'>
                <DragDropContext 
                    onDragStart={handleDragStart}
                    onDragEnd={result => handleDragEnd(result)} 
                >
                    <Container className='d-flex flex-column justify-content-between'>
                        <Row className='d-flex justify-content-center flex-grow-1'>
                            {board.columns.map((column, index) =>
                                <Column 
                                    key={index} 
                                    column={column} 
                                    index={index}
                                ></Column>
                            )}
                        </Row>
                        <Row className='align-self-center w-100'>
                            <Col>
                                <Trashbin dragging={dragging}></Trashbin>
                            </Col>
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