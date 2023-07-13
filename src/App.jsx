 import { useEffect, useState } from "react";
import { dbTasks } from "./components/database";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TasksGrid from "./components/TasksGrid/TasksGrid";
import { TaskType } from "./components/tasktypes";
import './global.css'


function App() {

  const [tasks, setTasks] = useState(dbTasks)

  useEffect(()=>{
    // console.log(tasks)
    // console.log('Component did update')
  }, [tasks])

  return (
    <>
      <Header />
      <TaskInput tasks={tasks} setTasks ={setTasks} />
      <TasksGrid tasks={tasks} setTasks ={setTasks} />
      
    </>
  )
}


// tasks = [{id: 1,
//   value: 'New task',
//    creationTime: new Date(),
//     type: todo}]

export default App;
