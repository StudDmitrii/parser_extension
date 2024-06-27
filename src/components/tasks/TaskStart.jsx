import './TaskStart.scss'
import startImg from '/src/assets/img/start.png'

export default function TaskStart({nextTask}){
    return (
        <div className='filler start'>
            <button onClick={e=>nextTask()} id='start-btn' style={{backgroundImage:`url('${startImg}')`}}></button>
        </div>
    )
}