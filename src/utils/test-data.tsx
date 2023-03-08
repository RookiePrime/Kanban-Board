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
              value: 'Mopper doodle.'
            },
            {
              id: uuid(),
              value: 'Lorem Ipsum Et Cetera.'
            },
            {
              id: uuid(),
              value: 'Ollie ollie oxen free.'
            },
          ]
        },
        {
          id: uuid(),
          name: 'In Progress',
          tasks: [
            {
              id: uuid(),
              value: 'Giddy up, cowboy.'
            },
            {
              id: uuid(),
              value: 'Razzamafoo to you, good sir.'
            },
            {
              id: uuid(),
              value: 'Good heavens, my goodness, and so forth.'
            },
          ]
        },
    ]
}