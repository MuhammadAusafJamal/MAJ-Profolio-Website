import "./skill.scss";


function SkillCard({ img, title , prog }) {
  return (
    <div className="skill-card-container" >
      <div className="skill-card-container-content">
        <img className="skill-card-image" src={img} />

        <div className="skill-card-text">
          <h5 className="skill-card-title">{title}</h5>
          <div className="progress"><h5>{prog}</h5></div>
        </div>
      </div>
    </div >
  )
}



export default SkillCard;