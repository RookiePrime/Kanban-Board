import { Droppable } from '@hello-pangea/dnd';
import { Col } from 'react-bootstrap';
import { ColumnComponent } from '../utils';
import { Task } from './';

export const Column = ({ column, index, columns, setColumns }: ColumnComponent) => {
    const { name, id, tasks } = column;

    return (
        <Col 
            className='d-flex flex-column align-items-center m-3 py-4 border border-dark-subtle'
            xs={6} sm={4} md={3} lg={3} xl={2}
            key={index}
        >
            <h2 className='h3 text-center'>{name}</h2>
            <div className='h-100 w-100'>
                <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`
                                    h-100 d-flex flex-column align-items-center
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
            </div>
        </Col>
    )
}