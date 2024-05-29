import { useCallback, useEffect, useRef } from 'react'
import './Task.scss'

export default function Task({taskNumber, taskTitle, done=false, children, returnHandler}){

    const return_btn_ref = useRef(null)
    const task_body_ref = useRef(null)

    useEffect(()=>{
            if (done == true){
                task_body_ref.current.style.cssText = 'display: none;'
                return_btn_ref.current.style.cssText = 'display: unset;'
            }
            else {
                task_body_ref.current.style.cssText = 'display: unset;'
                return_btn_ref.current.style.cssText = 'display: none;'
            }
    },[done])

    return (
    <div className="task">
        <div className="task-header">
            <div className='task-number'>{taskNumber}</div>
            <div className='task-title'>{taskTitle}</div>
            <button
                ref={return_btn_ref}
                className='task-return-btn'
                onClick={()=>returnHandler(taskNumber)}
                title={'Вернуться к шагу ' + taskNumber}>
            </button>
        </div>
        <div ref={task_body_ref} className='task-body'>{children}</div>
    </div>
    )
}