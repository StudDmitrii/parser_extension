import './TaskSelWaySel.scss'
import SelecBtn from './btns/SelectBtn'

export default function TaskSelWaySel({nextTask}){

    function handSelection(e){
        nextTask('Выбор элементов: ручной')
    }

    function autoSelection(e){
        nextTask('Выбор элементов: авто')
        //toDo
    }

    return(
        <div className='buttons'>
            <SelecBtn onClick={handSelection}>Ручной</SelecBtn>
            <SelecBtn onClick={autoSelection}>Авто</SelecBtn>
        </div>
    )
}