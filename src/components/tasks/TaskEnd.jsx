import './TaskEnd.scss'

export default function TaskEnd({nextTask}){
    return (
        <div className='filler'>
            <p>Данные собраны!</p>
            <p></p>
            <button>СКАЧАТЬ</button>
            <button onClick={e=>nextTask()}>ПЕРЕЙТИ К ТАБЛИЦЕ</button>
            <button>ДОБАВИТЬ ПАРСЕР</button>    
        </div>
    )
}