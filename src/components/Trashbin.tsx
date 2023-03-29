import { Droppable } from "@hello-pangea/dnd";

type TrashbinProps = { dragging: boolean }

export const Trashbin = ({ dragging }: TrashbinProps) => {
    return (
        <div 
            className='bg-danger border rounded'
            style={{
                height: dragging ? '10rem' : '0',
                transition: 'all 0.3s ease-out 0.3s'
            }}
        >
            <div className='h-100 w-100'>
                <Droppable droppableId='Trashbin'>
                    {(provided, snapshot) =>
                        <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='w-100 h-100 d-flex justify-content-center align-items-center border rounded'
                        style={{
                            background: snapshot.isDraggingOver ? 'blue' : 'red'
                        }}
                        >
                            {provided.placeholder}
                        </div>
                    }
                </Droppable>
            </div>
        </div>
    )
}