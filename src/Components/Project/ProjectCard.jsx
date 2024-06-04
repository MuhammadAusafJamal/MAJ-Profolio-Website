// import { Col } from "react-bootstrap";
// import "../Project/projects.scss";
// function ProjectCard({ title, description, imgUrl, Url }) {
//   return (

//     <Col onClick={() => window.open(Url)}>
//       <div className="project-card-container">
//         <div className="project-card-content">
//           <img className="project-image" src={imgUrl} alt="Project Image" />
//           <div className="proj-txtx">
//             <h4>{title}</h4>
//             <span>{description}</span>
//           </div>
//         </div>
//       </div>
//     </Col>

//   )
// };


// export default ProjectCard;


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function ProjectCard({ title, description, imgUrl, Url }) {

//   return (
//     <Card className="card-container" style={{ width: '20rem', margin: '8px', padding: '10px' }}>
//       <div className="card-container-s">
//         <Card.Img variant="top" src={imgUrl} />
//       </div>
//       <div className="">
//         <Card.Body className="proj-text">
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>
//             {description}
//           </Card.Text>
//           <Button variant="primary">Details</Button>
//         </Card.Body>
//       </div>

//     </Card>
//   );
// }

// export default ProjectCard;

import {useState} from "react";
import {Card} from "antd";
const {Meta} = Card;
import "./projects.scss"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function ProjectCard({ title, description, imgUrl , details , link , proficiency}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        className="cardImage"
        onClick={handleShow}
        cover={<img src={imgUrl} alt="example" />}
      >
        <Meta title={title} description={description} />
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body><b>{description}</b></Modal.Body> */}
        <Modal.Body>{details}</Modal.Body>
        <Modal.Body>{link}</Modal.Body>
        <Modal.Body>{proficiency}</Modal.Body>
        <Modal.Footer>
          <Button className="closeBtn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;
