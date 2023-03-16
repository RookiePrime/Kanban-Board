import { Droppable } from '@hello-pangea/dnd';
import { Col } from 'react-bootstrap';
import { ColumnComponent } from '../utils';
import { Task } from './';

export const Column = ({ column, index, columns, setColumns }: ColumnComponent) => {
    const { name, id, tasks } = column;

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
                                <Task key={task.id} draggableId={task.id} index={index} task={task} columns={columns} setColumns={setColumns}></Task>
                            )}
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </Col>
    )
}