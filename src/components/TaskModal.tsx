import { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { saveNewTask, TaskModalProps } from "../utils";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { taskAdded } from '../features/board/board-slice';

export const TaskModal = ({ show, handleClose, columns, setColumns }:TaskModalProps) => {
    const [taskText, setTaskText] = useState('');
    const board = useAppSelector(state => state.board);
    const dispatch = useAppDispatch();

    const handleAddTask = () => {
        dispatch(taskAdded(taskText));
    }

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
                            onKeyDown={e => {
                                if (e.key === 'Enter') return saveNewTask(columns, taskText, handleClose, setColumns, setTaskText)
                            }}     
                        />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => {
                        saveNewTask(columns, taskText, handleClose, setColumns, setTaskText);
                        handleAddTask();
                    }}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}