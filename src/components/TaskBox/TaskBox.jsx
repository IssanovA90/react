import './TaskBox.css'
import { HiArrowSmRight } from 'react-icons/hi'
import { BsTrashFill } from 'react-icons/bs'
import { TaskType } from '../tasktypes'




function TaskBox({ tasks, value, id, setTasks }) {
    const nextType = (e) => {
        const clone = JSON.parse(JSON.stringify(tasks))
        const foundElIndex = clone.findIndex(el => el.id === id)
        clone[foundElIndex].type = TaskType['PROGRESS']
        setTasks(clone)
    }

    const deleteItem = () =>{
        setTasks(currVal => {
            currVal = currVal.filter(task => task.id !==id)
            return currVal
        })
    }
    return (
        <>
            <div className="task__box">
                {value}
                <div className='box__button'>
                    <button data-id={id} onClick={nextType} className='silver'><HiArrowSmRight /></button>
                    <button onClick={deleteItem}  className='silver'><BsTrashFill /></button>
                </div>
            </div>
        </>
    )
}
export default TaskBox;