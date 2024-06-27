import { useEffect, useState } from 'react'
import './TaskCountElements.scss'
import SelecBtn from './btns/SelectBtn'
import Counter from './btns/Counter'

export default function TaskCountElement({nextTask}){

    const [maxCount, setMaxCount] = useState(1)

    function taskOver(){
        nextTask('Макс. число записей = ' + maxCount)
    }

    function counterHandler(val){
        setMaxCount(val)
    }

    return(
        <>
        <p className='smallText'>[0] - получить все (не рекомендуется)</p>
        <Counter onChangeHandler={counterHandler}/>
        <div className='buttons special'>
            <SelecBtn onClick={taskOver}>Далее</SelecBtn>
        </div>
        </>
    )
}