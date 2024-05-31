import { useEffect, useState } from 'react'
import './App.scss'
import HeaderLink from './components/HeaderLink'
import Task from './components/Task'
import TaskSelWaySel from "./components/tasks/TaskSelWaySel"
import TaskSelection from "./components/tasks/TaskSelection"

export default function App() {

  const [activeTasks, setActiveTasks] = useState([])

  const tasks = [
    {
        taskTitle: 'Выбор элементов:',
        task: <TaskSelWaySel nextTask={nextTask}/>
    },
    {
        taskTitle: 'Выберите элементы на странице...',
        task: <TaskSelection nextTask={nextTask}/>
    },
  ]

  useEffect(()=>{
    nextTask()
  }, [])

  function nextTask(prevTaskTitle){
    setActiveTasks(old=>{
      if (old.length == tasks.length){
        return old
      }
      const last_el = old[old.length-1]
      prevTaskTitle ? last_el.taskTitle = prevTaskTitle : null
      return [...old, tasks[old.length]]
    })
  }

  function returnTask(taskNumber){
    setActiveTasks(old=>{
      const new_tasks = old.slice(0,taskNumber)
      new_tasks[new_tasks.length-1].taskTitle = tasks[new_tasks.length-1].taskTitle
      return new_tasks
    })
  }

  return (
    <>
      <header>
        <div className='logo'>DataFisher</div>
        <nav>
          <HeaderLink img={'./src/assets/img/docs.png'} title={'Документация'}/>
          <HeaderLink img={'./src/assets/img/tools.png'} title={'Инструменты'}/>
        </nav>
      </header>

      <main>
        
        {activeTasks.map((el,index)=>(
          <Task
            done={index == activeTasks.length-1 ? false : true}
            key={index}
            taskNumber={index+1}
            taskTitle={el.taskTitle}
            returnHandler={returnTask}
          >
            {el.task}
          </Task>
        ))}
        
      </main>
    </>
  )
}