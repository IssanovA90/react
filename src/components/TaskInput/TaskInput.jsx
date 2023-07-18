import React, { useState, useEffect } from 'react';
import Container from '../Container/Container';
import './TaskInput.css';
import { IoIosAdd } from 'react-icons/io';
import { TaskType } from '../tasktypes';

function TaskInput({ tasks, setTasks }) {
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, [setTasks]);

    const inputChangeHandler = e => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        if (inputValue) {
            const newTask = {
                id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
                value: inputValue,
                creationTime: new Date(),
                type: TaskType['TODO']
            };
            setTasks(currVal => {
                const updatedTasks = [...currVal, newTask];
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                return updatedTasks;
            });
            setInputValue('');
        }
    };

    return (
        <Container>
            <div style={{
                marginBottom: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30px'
            }}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={inputChangeHandler}
                    placeholder="Введите задачу"
                    className='task__input'
                />
                <button
                    className='input__add_button'
                    onClick={handleClick}
                >
                    <IoIosAdd />
                </button>
            </div>
        </Container>
    );
}

export default TaskInput;