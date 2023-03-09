import { Draggable } from '@hello-pangea/dnd';
import Card from 'react-bootstrap/Card';
import { TaskComponent, TaskData } from '../utils/types';

export const Task = ({task, index}:TaskComponent) => {
    const { id, value }:TaskData = task;

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => {
                return (
                    <Card 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            width: '15rem',
                            ...provided.draggableProps.style
                        }} 
                        className={`${snapshot.isDragging ? 'bg-light' : 'bg-white'}`}
                    >
                        <Card.Body>
                            <Card.Text>
                                {value}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }}
        </Draggable>
    )
}