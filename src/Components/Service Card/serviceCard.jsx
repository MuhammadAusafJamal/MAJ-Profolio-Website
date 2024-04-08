import "./serviceCard.scss";


function ServiceCard({ img, title, description }) {
  return (
    <div className="service-card-container" >
      <div className="service-card-container-content">
        <img className="service-card-image" src={img} />

        <div className="service-card-text">

          <h5 className="service-card-title">{title}</h5>

          <span className="service-card-description">{description}</span>
        </div>
      </div>
    </div >
  )
}



export default ServiceCard;