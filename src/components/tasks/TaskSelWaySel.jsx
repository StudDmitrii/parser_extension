import './TaskSelWaySel.scss'
import SelecBtn from './btns/SelectBtn'

export default function TaskSelWaySel(){

    function handSelection(e){
        
    }

    function autoSelection(e){
        //toDo
    }

    return(
        <div className='buttons'>
            <SelecBtn onClick={handSelection}>Ручной</SelecBtn>
            <SelecBtn onClick={autoSelection}>Авто</SelecBtn>
        </div>
    )
}