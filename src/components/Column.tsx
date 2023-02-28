import Col from 'react-bootstrap/Col'
import { ColumnData } from '../utils/types'
import { Task } from './Task'

export const Column = (columnData: ColumnData) => {
    return (
        <Col className='d-flex flex-column align-items-center w-auto h-100 mx-3 p-4 border border-dark-subtle bg-light'>
            <h2 style={{ textAlign: 'center' }}>{columnData.name}</h2>
            {Object.entries(columnData.tasks).map((task, index) => {
                return <Task key={index} id={task[1].id} value={task[1].value}></Task>
            })}
        </Col>
    )
}