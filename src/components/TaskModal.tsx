import { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { TaskModalProps } from "../utils";
import { useAppDispatch } from '../app/hooks';
import { taskAdded } from '../features/board/board-slice';

export const TaskModal = ({ show, handleClose }:TaskModalProps) => {
    const [taskText, setTaskText] = useState('');
    const dispatch = useAppDispatch();

    const handleAddTask = () => {
        dispatch(taskAdded(taskText));
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Dialog className={'w-100, m-5'}>
                <Modal.Body>
                    <Form>
                        <Form.Control 
                            as='textarea'
                            className='overflow-hidden, border-0'
                            style={{resize: 'none'}}
                            autoFocus
                            placeholder='Enter your task here!'
                            value={taskText}
                            onChange={e => setTaskText(e.target.value)}
                            onKeyDown={e => { if (e.key === 'Enter') handleAddTask() }}     
                        />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleAddTask}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}