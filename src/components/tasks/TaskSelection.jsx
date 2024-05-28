import './TaskSelection.scss'
import SelecBtn from './btns/SelectBtn'

export default function TaskSelection({nextTask}){

    function taskOver(){
        nextTask()
    }

    return(
        <div className='buttons'>
            <SelecBtn onClick={taskOver}>Далее</SelecBtn>
        </div>
    )
}