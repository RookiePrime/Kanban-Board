import { v4 as uuid } from 'uuid';

export const boardData = {
    columns: [
        {
          id: uuid(),
          name: 'Requested',
          tasks: []
        },
        {
          id: uuid(),
          name: 'Todo',
          tasks: []
        },
        {
          id: uuid(),
          name: 'In Progress',
          tasks: []
        },
        {
          id: uuid(),
          name: 'Completed',
          tasks: []
        },
        {
          id: uuid(),
          name: 'Blocked',
          tasks: []
        },
    ]
}