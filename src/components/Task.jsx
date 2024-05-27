import { useCallback } from 'react'
import './Task.scss'

export default function Task({taskNumber, taskTitle, done=false, children}){

    const onTaskBodyRefChange = useCallback(el => {
        if (done == true){
            el.classList.add('done')
        }
        else if (done == false){
            el.classList.remove('done')
        }
    }, [])

    return (
    <div className="task">
        <div className="task-header">
            <div className='task-number'>{taskNumber}</div>
            <div className='task-title'>{taskTitle}</div>
        </div>
        <div ref={onTaskBodyRefChange} className='task-body'>{children}</div>
    </div>
    )
}