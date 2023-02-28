import Col from 'react-bootstrap/Col'
import { StrictModeDroppable } from '../utils/StrictModeDroppable'
import { ColumnData } from '../utils/types'
import { Task } from './Task'

export const Column = (columnData: ColumnData) => {
    return (
        <Col 
            className='
                d-flex 
                flex-column 
                align-items-center 
                w-auto 
                h-90 
                m-3 
                p-4 
                border 
                border-dark-subtle 
                bg-light
            '
            style={{ minWidth: '18rem' }}
        >
            <h2 style={{ textAlign: 'center' }}>{columnData.name}</h2>
            <StrictModeDroppable droppableId={columnData.id}>
                {(provided) => {
                    return (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {columnData.tasks.map((task, index) => {
                                return <Task key={index} id={task.id} value={task.value}></Task>
                            })}
                        </div>
                    )
                }}
            </StrictModeDroppable>
        </Col>
    )
}