import './HeaderLink.scss'

export default function HeaderLink({img, title}){
    return (
    <div className="header-link" style={{backgroundImage:`url(${img})`}} title={title}>
        
    </div>
    )
}