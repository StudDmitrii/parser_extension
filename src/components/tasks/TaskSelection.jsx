import './TaskSelection.scss'
import SelecBtn from './btns/SelectBtn'

export default function TaskSelWaySel(){

    return(
        <div className='buttons'>
            <SelecBtn onClick={handSelection}>Далее</SelecBtn>
        </div>
    )
}