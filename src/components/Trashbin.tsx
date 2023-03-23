import { Droppable } from "@hello-pangea/dnd";

export const Trashbin = () => {

    return (
        <div 
            className='
                bg-danger 
                d-flex 
                justify-content-center 
                align-items-center 
                p-4
                border
                rounded
        '>
            <Droppable droppableId='Trashbin'>
                {(provided, snapshot) =>
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className='w-100 d-flex justify-content-center align-items-center'
                    style={{height: snapshot.isDraggingOver ? '100%' : '0%'}}
                    >
                        <p className='m-0'>Drop your task here to delete it!</p>
                        {provided.placeholder}
                    </div>
                }
            </Droppable>
        </div>
    )
}