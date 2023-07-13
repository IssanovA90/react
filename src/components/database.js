import { TaskType } from "./tasktypes";

export const dbTasks = [
    {
        id: 1,
        value: 'New task',
        creationTime: new Date(),
        type: TaskType['TODO']
    },
    {
        id: 2,
        value: 'Tasks in progress',
        creationTime: new Date(),
        type: TaskType['PROGRESS']
    },
    {
        id: 3,
        value: 'Tasks in finished',
        creationTime: new Date(),
        type: TaskType['FINISHED']
    }
]