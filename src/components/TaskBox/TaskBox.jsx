import React, { useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import { BsTrashFill } from 'react-icons/bs';
import { TaskType } from '../tasktypes';
import './TaskBox.css';

function TaskBox({ tasks, value, id, setTasks }) {
    const [isInProgress, setIsInProgress] = useState(
        tasks.find(task => task.id === id).type === TaskType.PROGRESS
    );

    const nextType = () => {
        setTasks(currVal => {
            const clone = [...currVal];
            const foundElIndex = clone.findIndex(el => el.id === id);
            const currentType = clone[foundElIndex].type;

            if (currentType === TaskType.TODO) {
                clone[foundElIndex].type = TaskType.PROGRESS;
            } else if (currentType === TaskType.PROGRESS) {
                clone[foundElIndex].type = TaskType.FINISHED;
            } else if (currentType === TaskType.FINISHED) {
                clone[foundElIndex].type = TaskType.PROGRESS;
            }
            localStorage.setItem('tasks', JSON.stringify(clone));
            return clone;
        });

        if (tasks.find(task => task.id === id).type === TaskType.PROGRESS) {
            setIsInProgress(true);
        } else {
            setIsInProgress(false);
        }
    };

    const deleteItem = () => {
        setTasks(currVal => {
            const updatedTasks = currVal.filter(task => task.id !== id);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    return (
        <div className="task__box">
            <div className="task__box__value">
            {value}
            </div>
            <div className='box__button'>
                {tasks.find(task => task.id === id).type === TaskType.TODO ? (
                    <button onClick={nextType} className='silver'>
                        <HiArrowSmRight />
                    </button>
                ) : (
                    <input
                        type="checkbox"
                        onClick={nextType}
                        checked={tasks.find(task => task.id === id).type === TaskType.FINISHED}
                        readOnly
                    />
                )}
                <button onClick={deleteItem} className='silver'><BsTrashFill /></button>
            </div>
        </div>
    );
}

export default TaskBox;