import { BoardData } from "./types"
import { v4 as uuid } from 'uuid'

export const data:BoardData = {
    columns: [
        {
          id: uuid(),
          name: 'Requested',
          tasks: [
            {
              id: uuid(),
              value: 'Write new components for the system.'
            },
            {
              id: uuid(),
              value: 'Floop the pig.'
            },
            {
              id: uuid(),
              value: 'Reticulate those splines.'
            },
          ]
        },
        {
          id: uuid(),
          name: 'Todo',
          tasks: [
            {
              id: uuid(),
              value: 'Write new components for the system.'
            },
            {
              id: uuid(),
              value: 'Floop the pig.'
            },
            {
              id: uuid(),
              value: 'Reticulate those splines.'
            },
          ]
        },
        {
          id: uuid(),
          name: 'In Progress',
          tasks: [
            {
              id: uuid(),
              value: 'Write new components for the system.'
            },
            {
              id: uuid(),
              value: 'Floop the pig.'
            },
            {
              id: uuid(),
              value: 'Reticulate those splines.'
            },
          ]
        },
      ]
}