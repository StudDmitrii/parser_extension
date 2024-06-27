import './TaskSelWaySel.scss'
import SelecBtn from './btns/SelectBtn'

export default function TaskSelPagination({nextTask}){

    function scrollSelect(e){
        nextTask('Пагинация = скролл')
    }

    function btnSelect(e){
        nextTask('Пагинация = кнопка')
    }

    return(
        <div className='buttons'>
            <SelecBtn onClick={scrollSelect}>Скролл</SelecBtn>
            <SelecBtn onClick={btnSelect}>Кнопка</SelecBtn>
        </div>
    )
}