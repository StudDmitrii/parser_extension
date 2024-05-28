import { useCallback, useRef } from 'react'
import './Task.scss'

export default function Task({taskNumber, taskTitle, done=false, children}){

    const return_btn_ref = useRef(null)

    const onTaskBodyRefChange = useCallback(el => {
        if (done == true){
            el.classList.add('done')
            return_btn_ref.current.style.cssText = 'visibility: visible;'
        }
        else if (done == false){
            el.classList.remove('done')
            return_btn_ref.current.style.cssText = 'visibility: hidden;'
        }
    }, [])

    return (
    <div className="task">
        <div className="task-header">
            <div className='task-number'>{taskNumber}</div>
            <div className='task-title'>{taskTitle}</div>
            <button ref={return_btn_ref} className='task-return-btn' title={'Вернуться к шагу ' + taskNumber}></button>
        </div>
        <div ref={onTaskBodyRefChange} className='task-body'>{children}</div>
    </div>
    )
}