import { Draggable } from 'react-beautiful-dnd';
import Card from 'react-bootstrap/Card';
import { TaskData } from '../utils/types';

export const Task = ({ value, id }:TaskData, key:number) => 
    <Draggable draggableId={id} index={key}>
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
                    // className={`${snapshot.isDragging 
                    //     ? 'bg-light-subtle' 
                    //     : 'bg-light w-100'}
                    //     `}
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