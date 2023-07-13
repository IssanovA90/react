import Container from "../Container/Container";
import TasksGridItem from "../TasksGridItem/TasksGridItem";
import './TasksContainer.css'

const listNames = [
    'Tasks to do',
    'Tasks in progress',
    'Completed tasks'
]

function TasksContainer() {
    return (
        <Container>
            <div className="tasks__container">
                {listNames.map(name => {
                    return (
                        <TasksGridItem key={name} name={name} />
                    )
                })}
            </div>
        </Container>
    )
}

export default TasksContainer;