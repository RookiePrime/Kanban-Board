import { Droppable } from '@hello-pangea/dnd';
import Col from 'react-bootstrap/Col';
import { ColumnData } from '../utils';
import { Task } from './';

export const Column = ({ id, tasks, name }: ColumnData, index:number) => {
    return (
        <Col 
            className='
                d-flex 
                flex-column 
                align-items-center 
                justify-content-center
                w-auto 
                m-3
                pt-4
                border 
                border-dark-subtle 
            '
            style={{ minWidth: '18rem' }}
            key={index}
        >
            <h2 style={{ textAlign: 'center' }}>{name}</h2>
            <Droppable droppableId={id} key={id}>
                {(provided, snapshot) => {
                    return (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={`
                                w-100 h-100
                                d-flex
                                flex-column
                                align-items-center
                                ${snapshot.isDraggingOver ? 'bg-light' : 'bg-white'}
                            `}
                        >
                            {tasks.map((task, index) => 
                                <Task key={task.id} draggableId={task.id} index={index} task={task}></Task>
                            )}
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </Col>
    )
}