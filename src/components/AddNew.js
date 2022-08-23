import React, { useState } from 'react';
import Task from './Task';
import useLocalStorage from './useLocalStorage'

export default function AddNew() {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useLocalStorage('taskListInLocal', []);
    const addTask = () => {
        if (document.querySelector('.inp').value != '') {
            setTaskList([...taskList, { task: taskName }])
            setTaskName('')
            document.querySelector('.inp').value = '';
        }
    }

    function deleteAll() {
        let data = JSON.parse(localStorage.getItem('taskListInLocal'))
        data.splice(0);
        localStorage.taskListInLocal = JSON.stringify(data);
    }


    return (
        <div>
            <div className='App'>
                <div className='adding-part'>
                    <input type='text' id='task' className="inp"
                        onChange={e => {
                            setTaskName(e.target.value)
                        }
                        }></input>
                    <button className='add-button' onClick={addTask}>Add</button>
                </div>
            </div>
            <div className='list'>
                {taskList.map(task => {
                    return <Task taskName={task.task} />
                })}
                <a href='' className='clearAll' onClick={deleteAll}>Delete All</a>
            </div>
        </div>
    )
}