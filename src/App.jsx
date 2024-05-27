import { useState } from 'react'
import './App.scss'
import HeaderLink from './components/HeaderLink'
import Task from './components/Task'
import TaskSelWaySel from './components/tasks/TaskSelWaySel'

export default function App() {

  const tasks = [
    {
      taskTitle: 'Cпособ поиска данных:',
      task: <TaskSelWaySel/>
    },
    {
      taskTitle: 'Cпособ поиска данных:',
      task: <TaskSelWaySel/>
    },
    {
      taskTitle: 'Cпособ поиска данных:',
      task: <TaskSelWaySel/>
    },
  ]

  return (
    <>
      <header>
        <div className='logo'>DataFisher</div>
        <nav>
          <HeaderLink/>
          <HeaderLink/>
        </nav>
      </header>

      <main>
        
        {tasks.map((el,index)=>(
          <Task
            done={index == tasks.length-1 ? false : true}
            key={index}
            taskNumber={index+1}
            taskTitle={el.taskTitle}
          >
            {el.task}
          </Task>
        ))}
        
      </main>
    </>
  )
}