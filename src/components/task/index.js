import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = (props) => {
    const { task, listCard, ind } = props;
    return (
        <div className="list-wrapper" key={"task"+ind}>
            <Draggable draggableId={task.id} index={ind}>
                {provided => (
                    <div 
                        className="list"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <span>{task.title}</span>
                        <div className="position-absolute card-opt">
                            <svg height="14px" viewBox="0 -1 381.53417 381" className="mr-2" width="14px" xmlns="http://www.w3.org/2000/svg" onClick={() => props.editCard(listCard, ind, props.boardKey)}>
                                <path d="m370.589844 230.964844c-5.523438 0-10 4.476562-10 10v88.792968c-.019532 16.558594-13.4375 29.980469-30 
                                30h-280.589844c-16.5625-.019531-29.980469-13.441406-30-30v-260.589843c.019531-16.5625 13.4375-29.980469 
                                30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 
                                22.398437-50 50v260.589843c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 
                                49.96875-22.398437 50-50v-88.789062c0-5.523438-4.476563-10.003906-10-10.003906zm0 0"/>
                                <path d="m156.367188 178.34375 146.011718-146.015625 47.089844 47.089844-146.011719 146.015625zm0 0"/>
                                <path d="m132.542969 249.257812 52.039062-14.414062-37.625-37.625zm0 0"/>
                                <path d="m362.488281 7.578125c-9.769531-9.746094-25.585937-9.746094-35.355469 0l-10.605468 10.605469 
                                47.089844 47.089844 10.605468-10.605469c9.75-9.769531 9.75-25.585938 0-35.355469zm0 0"/>
                            </svg>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="12px" height="12px" viewBox="0 0 774.266 774.266" xmlSpace="preserve" onClick={() => props.deleteCard(listCard, ind, props.boardKey)}>
                                <g>
                                    <g>
                                        <path d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875
                                            C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916
                                            c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703
                                            c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169z
                                            M285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282
                                            c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802
                                            H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z"/>
                                        <rect x="475.031" y="286.593" width="48.418" height="396.942"/>
                                        <rect x="363.361" y="286.593" width="48.418" height="396.942"/>
                                        <rect x="251.69" y="286.593" width="48.418" height="396.942"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                )}
            </Draggable>
        </div>
    )
}

export default TaskCard;