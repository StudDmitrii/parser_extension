import './Error.scss'

export default function Error({errType, errTitle, errBody}){
    return(
        <div className="error-container">
            <div className="error">
                <div className="error-type">{errType}</div>
                <div className='error-title'>{errTitle}</div>
                <div className='error-body'>{errBody}</div>
            </div>
        </div>
    )
}