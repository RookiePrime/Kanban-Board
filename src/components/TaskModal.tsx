import { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { saveTask, TaskModalProps } from "../utils";

export const TaskModal = ({ show, handleClose, columns, setColumns }:TaskModalProps) => {
    const [taskText, setTaskText] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit.');

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Dialog>
                <Modal.Body>
                    {taskText}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => saveTask(columns, taskText, handleClose, setColumns)}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}