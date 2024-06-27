import { useEffect } from 'react'
import './TaskSelection.scss'
import SelecBtn from './btns/SelectBtn'

export default function TaskSelection({nextTask}){

    useEffect(()=>{
        const innerFunc = async ()=>{
            const [tab] = await chrome.tabs.query({active:true, lastFocusedWindow: true})
            const res = await chrome.tabs.sendMessage(tab.id, 'hand_selection')
        }
        innerFunc()

        return () => {
            const innerFunc = async ()=>{
                const [tab] = await chrome.tabs.query({active:true, lastFocusedWindow: true})
                const res = await chrome.tabs.sendMessage(tab.id, 'stop_hand_selection')
            }
            innerFunc()
        }
    }, [])

    function taskOver(){
        nextTask('Кнопка пагинации выбрана')
    }

    return(
        <div className='buttons special'>
            <SelecBtn onClick={taskOver}>Далее</SelecBtn>
        </div>
    )
}