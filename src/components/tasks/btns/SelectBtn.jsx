import './SelectBtn.scss'

export default function SelectBtn({onClick, children}){
    return(
        <button className='select-btn' onClick={onClick}>
            {children}
        </button>
    )
}