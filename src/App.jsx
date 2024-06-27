import { useEffect, useState } from 'react'
import './App.scss'
import HeaderLink from './components/HeaderLink'
import Task from './components/Task'
import TaskSelWaySel from "./components/tasks/TaskSelWaySel"
import TaskSelection from "./components/tasks/TaskSelection"
import docs_png from '/src/assets/img/docs.png'
import tools_png from '/src/assets/img/tools.png'
import TaskCountElement from './components/tasks/TaskCountElements'
import TaskSelPagination from './components/tasks/TaskSelPagination'
import TaskSelPaginationBtn from './components/tasks/TaskSelPaginationBtn'
import TaskStart from './components/tasks/TaskStart'
import TaskEnd from './components/tasks/TaskEnd'

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
    {
      taskTitle: 'Сколько записей необходимо найти?',
      task: <TaskCountElement nextTask={nextTask}/>
    },
    {
      taskTitle: 'Как получить больше записей?',
      task: <TaskSelPagination nextTask={nextTask}/>
    },
    // {
    //   taskTitle: 'Выберите ссылку или кнопку на странице...',
    //   task: <TaskSelPaginationBtn nextTask={nextTask}/>
    // },
    {
      taskTitle: '',
      task: <TaskStart nextTask={nextTask}/>
    },
    {
      taskTitle: '',
      task: <TaskEnd nextTask={nextTask}/>
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
          <HeaderLink img={docs_png} title={'Документация'}/>
          <HeaderLink img={tools_png} title={'Инструменты'}/>
        </nav>
      </header>

      <main>
        
        {activeTasks.map((el,index)=>(
          <Task
            done={index == activeTasks.length-1 ? false : true}
            key={index}
            taskNumber={index < 5 ? index+1 : null}
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