import { useEffect, useRef, useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Card, Form } from 'react-bootstrap';
import { saveTaskText, TaskComponent, TaskData } from '../utils';

export const Task = ({ task, index, columns, setColumns }:TaskComponent) => {
    const { id, value }:TaskData = task;

    const [taskText, setTaskText] = useState<string>(value);
    const [editingText, setEditingText] = useState<boolean>(false);

    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (inputRef.current !== null)
            inputRef.current.focus();
    }, [editingText]);

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => {
                return (
                    <Card 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{...provided.draggableProps.style}} 
                        className={`${snapshot.isDragging ? 'bg-light' : 'bg-white w-100'}`}
                    >
                        {
                            editingText 
                            ?   <Form>
                                    <Form.Control 
                                        as='textarea'
                                        className='overflow-hidden'
                                        style={{resize: 'none'}}
                                        ref={inputRef}
                                        value={taskText} 
                                        onChange={e => setTaskText(e.target.value)}
                                        onBlur={() => saveTaskText(columns, id, taskText, setColumns, setEditingText)}
                                        onKeyDown={e => {
                                            if (e.key === 'Enter')
                                                return saveTaskText(columns, id, taskText, setColumns, setEditingText)
                                        }}
                                    />
                                </Form>
                            :   <Card.Body onClick={() => setEditingText(true)}>
                                    <Card.Text>
                                        {taskText}
                                    </Card.Text>
                                </Card.Body>
                        }
                    </Card>
                )
            }}
        </Draggable>
    )
}