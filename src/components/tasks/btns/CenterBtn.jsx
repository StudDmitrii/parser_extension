import './CenterBtn.scss'

export default function CenterBtn({onClick, children}){
    return(
        <button className='center-btn' onClick={onClick}>
            {children}
        </button>
    )
}