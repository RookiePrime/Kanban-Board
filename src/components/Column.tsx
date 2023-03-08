import { Droppable } from '@hello-pangea/dnd';
import Col from 'react-bootstrap/Col';
import { ColumnData } from '../utils/types';
import { Task } from './Task';

export const Column = ({ id, tasks, name }: ColumnData, index:number) => {
    return (
        <Col 
            className='
                d-flex 
                flex-column 
                align-items-center 
                w-auto 
                m-3 
                p-4 
                border 
                border-dark-subtle 
                bg-light
            '
            style={{ minWidth: '18rem' }}
            key={index}
        >
            <h2 style={{ textAlign: 'center' }}>{name}</h2>
            <Droppable droppableId={id}>
                {(provided) => {
                    return (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {tasks.map((task, index) => 
                                <Task key={index} index={index} task={task}></Task>
                            )}
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </Col>
    )
}