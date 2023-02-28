import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { TaskData } from '../utils/types'

export const Task = ({ value }:TaskData) => 
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Text>
                {value}
            </Card.Text>
        </Card.Body>
    </Card>