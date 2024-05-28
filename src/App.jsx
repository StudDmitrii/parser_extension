import './App.scss'
import HeaderLink from './components/HeaderLink'
import Task from './components/Task'
import tasks from './components/tasks'


export default function App() {

  const activeTasks = tasks.parsing.slice(0,2)

  return (
    <>
      <header>
        <div className='logo'>DataFisher</div>
        <nav>
          <HeaderLink img={'./src/assets/img/docs.png'} title={'Документация'}/>
          <HeaderLink img={'./src/assets/img/acc.png'} title={'Действия'}/>
        </nav>
      </header>

      <main>
        
        {activeTasks.map((el,index)=>(
          <Task
            done={index == activeTasks.length-1 ? false : true}
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