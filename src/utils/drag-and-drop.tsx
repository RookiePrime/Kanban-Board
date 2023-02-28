import { DropResult } from 'react-beautiful-dnd';
import { ColumnData } from "./types";

export const onDragEnd = (result:DropResult, columns:ColumnData[], setColumns:ColumnData) => {
    // if (!result.destination) return;
    //     const { source, destination } = result;
    //     if (source.droppableId !== destination.droppableId) {
    //         const sourceColumn = columns[source.droppableId];
    //         const destColumn = columns[destination.droppableId];
    //         const sourcetasks = [...sourceColumn.tasks];
    //         const desttasks = [...destColumn.tasks];
    //         const [removed] = sourcetasks.splice(source.index, 1);
    //         desttasks.splice(destination.index, 0, removed);

    //         setColumns({
    //         ...columns,
    //         [source.droppableId]: {
    //             ...sourceColumn,
    //             tasks: sourcetasks
    //         },
    //         [destination.droppableId]: {
    //             ...destColumn,
    //             tasks: desttasks
    //         }
    //         });
    //     } else {
    //         const column = columns[source.droppableId];
    //         const copiedtasks = [...column.tasks];
    //         const [removed] = copiedtasks.splice(source.index, 1);
    //         copiedtasks.splice(destination.index, 0, removed);
        
    //         setColumns({
    //         ...columns,
    //         [source.droppableId]: {
    //             ...column,
    //             tasks: copiedtasks
    //         }
    //         });
    // }
}