import { Droppable } from "@hello-pangea/dnd";

type TrashbinProps = { dragging: boolean }

export const Trashbin = ({ dragging }: TrashbinProps) => {
    return (
            <div className='h-100 w-100'>
                <Droppable droppableId='Trashbin'>
                    {(provided, snapshot) =>
                        <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`w-100 rounded ${dragging ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            background: snapshot.isDraggingOver ? 'aquamarine' : 'mediumaquamarine',
                            minHeight: '4rem',
                            transition: 'all 0.2s ease-in-out',
                        }}
                        >
                            {provided.placeholder}
                        </div>
                    }
                </Droppable>
            </div>
    )
}