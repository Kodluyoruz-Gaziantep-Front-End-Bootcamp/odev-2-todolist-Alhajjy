import React from 'react';

function Task(props) {
    return (
            <div className='task'>
                <h5>{props.taskName}</h5>
            </div>
    )
}
export default Task;