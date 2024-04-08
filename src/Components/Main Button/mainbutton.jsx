import "./mainbutton.scss"
function MainButton({Cname , title , icon , event , type}) {
  
    return (
        <button type={type}  className={`main-button ${Cname}`} onClick={event}><span className="btn-title">{icon} {title}</span></button>
    )
}

export default MainButton;