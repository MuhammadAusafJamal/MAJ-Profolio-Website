import "./projects.scss";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
// import projImg2 from "../../assets/Images/nlogo.png";
import projBgImage from "../../assets/Images/h2_project_shape.png";
import dicegame from "../../assets/Images/diceGameProj.png";
// import richtext from "../../assets/Images/richtext.jpg";
import todo from "../../assets/Images/todo.jpg";
import nike from "../../assets/Images/nike land.jpg";
import airforshare from "../../assets/Images/airforshareclone.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


function Project() {
  const Htmlprojects = [
    {
      title: "Nft Project",
      description: "Smit HTML/CSS Website Class Competition ",
      details:
        "For the Smit website Class competition, I created a captivating website using HTML and CSS. Inspired by a sleek ThemeForest template, I meticulously crafted a visually stunning replica showcasing modern web design trends.",
      link: "🌐 https://nft-projectt.netlify.app",
      proficiency:
        "This project demonstrates my proficiency in HTML/CSS and my ability to replicate complex designs with precision and creativity. It's a testament to my dedication to web development excellence.",
      // imgUrl: ProjectNft,
    },
    {
      title: "Figma To Html",
      description: "Figma to HTML/CSS Conversion",
      details:
        "I transformed a Figma design into a fully functional website using HTML and CSS. Inspired by the original design, I meticulously crafted each element to ensure a seamless user experience.",
      link: "🌐 https://figmatohtmll.netlify.app",
      proficiency:
        "This project showcases my proficiency in HTML/CSS and my ability to translate complex designs into interactive web experiences. It reflects my dedication to delivering high-quality web solutions.",
      // imgUrl: ProjectFigma,
    },
    {
      title: "Pepsi Website Clone",
      description: "Smit Hackathon Challenge: Pepsi Website Clone",
      details:
        "In the Smit Hackathon, our team was challenged to clone the Pepsi website within a tight deadline of 10 hours. Leveraging our HTML, CSS, and JavaScript skills, we worked collaboratively to recreate the Pepsi website's layout, design, and functionality.",
      link: "🌐 https://abdulnafay-pepsi.netlify.app",
      proficiency:
        "This project demonstrates our proficiency in frontend web development and our ability to efficiently replicate complex designs under pressure. It highlights our commitment to delivering results within strict time constraints.",
      // imgUrl: ProjectPepsi,
    },
  ];

  const Jsprojects = [
    {
      title: "Watch App Filter Practice",
      description: "JavaScript Filter Practice",
      details:
        "I developed a watch app filter feature as part of my JavaScript practice. Using vanilla JavaScript, I implemented filtering functionality to allow users to search for watches based on their desired criteria.",
      link: " 🌐 https://watchapp-filter.netlify.app",
      proficiency:
        "This project showcases my proficiency in JavaScript and my ability to implement dynamic filtering functionality. It demonstrates my commitment to continuous learning and improvement in web development.",
      // imgUrl: ProjectWatchApp,
    },
    {
      title: "Travel Tours Website",
      description: "Custom Travel Tours Website for Client",
      details:
        "I developed a bespoke travel tours website for a client, implementing a sleek and user-friendly UI using HTML, CSS, and JavaScript. Every aspect of the website was tailored to meet the client's specific requirements, ensuring a seamless browsing experience for users.",
      link: "🌐 https://traveltourss.netlify.app",
      proficiency:
        "This project highlights my proficiency in frontend web development and my ability to create visually appealing and functional websites according to client specifications. It demonstrates my commitment to delivering high-quality web solutions that exceed client expectations.",
      // imgUrl: ProjectTravelTour,
    },
    {
      title: "Todo App",
      description: "Todo List Application for Practice",
      details:
        "I developed a todo list application as part of my practice to enhance my JavaScript skills. Using HTML, CSS, and JavaScript, I created a simple yet functional todo app that allows users to add and delete tasks.",
      link: "🌐 https://todoapp-nafay.netlify.app",
      proficiency:
        "This project demonstrates my proficiency in JavaScript and my ability to create interactive web applications. It showcases my dedication to continuous learning and improvement in web development.",
      // imgUrl: ProjectTodoApp,
    },
    {
      title: "Weather Forecast App",
      description: "Weather Forecast Application with Fake API Integration",
      details:
        "I built a weather forecast application to practice API integration using a fake weather API. Utilizing HTML, CSS, and JavaScript, I created a user-friendly interface that fetches weather data and displays the forecast for a specified location.",
      link: "🌐 https://nafay-weather-app.netlify.app",
      proficiency:
        "This project demonstrates my proficiency in working with APIs and my ability to develop functional web applications. It showcases my commitment to learning and improving my skills in web development.",

      // imgUrl: ProjectWetherApp,
    },
    {
      title: "Calculator App",
      description: "Calculator Application for Practice",
      details:
        "I developed a calculator application as part of my practice to enhance my frontend development skills. Using HTML, CSS, and JavaScript, I created a functional calculator that performs basic arithmetic operations.",
      link: "🌐 https://myy-calculatorr.netlify.app",
      proficiency:
        "This project demonstrates my proficiency in frontend web development and my ability to create interactive applications. It reflects my dedication to continuous learning and improvement in web development.",
      // imgUrl: ProjectCalculator,
    },
    {
      title: "Post App",
      description:
        "Post Application with Real-Time Posting and Moment.js Integration",
      details:
        "I created a post application where users can write and submit posts, which are then displayed in separate cards. Each card includes the post content along with the current post time, utilizing Moment.js for time formatting. This project was developed to practice frontend and real-time data updating.",
      link: "🌐 https://postappp.netlify.app",
      proficiency:
        "This project demonstrates my proficiency in frontend web development, as well as my ability to integrate and utilize third-party libraries like Moment.js. It showcases my commitment to creating dynamic and user-friendly web applications",
      // imgUrl: ProjectPostApp,
    },
  ];
  const Reactprojects = [
    {
      title: "Air For Share",
      description:
        "Replica of Air For Share ",
      details: "Exciting news! We're integrating Firebase into our AirforShare replica for real-time data sync, secure authentication, and cloud storage. Stay tuned for enhanced functionality and seamless connectivity!",
      // imgUrl: ProjectAirForShare,
    },
    {
      title: "Dice Guessing Game",
      description: "Click for more details",
      details:"bsadbsandsab",
      Url: "https://dice-guess-game.netlify.app/",
      imgUrl: dicegame
    },
    {
      title: "Nike Landing Page",
      description: "This was one my intial projects while exploring react where i explored how to use react app",
      imgUrl: nike,
      Url: "https://nike-landiing.netlify.app/",
      // learned:"I learned about pakages "
    },
    {
      title: "Todo App",
      description: "I developed a Todo application using React, which allows users to create, manage, and delete tasks. The app provides a simple and intuitive interface for users to add new tasks, mark tasks as completed, and remove completed tasks from the list.",
      imgUrl: todo,
      Url: "https://tooddo-app.netlify.app/",
      learned: "This project deepened my understanding of React by implementing components, managing state, and handling user interactions.Learned how to manage application state in React, including storing and updating task data.I also implemented local storage to persist tasks between browser sessions, allowing users to revisit the app and see their tasks."

    },
    {
      title: "Air For Share Clone",
      description: "I created a clone of AirForShare using React, SCSS, and Firestore. AirForShare is a platform that allows users to easily share files and text snippets with others. The clone mimics the core functionality of AirForShare, providing users with the ability to upload files and share them via a generated link",
      imgUrl: airforshare,
      Url: "https://air-for-share-clone.vercel.app/",
      learned: "This project deepened my understanding of React by implementing components, managing state, and handling routing within the application. SCSS allowed me to enhance the visual appeal of the clone with advanced styling techniques such as variables and nested styles. Integrating Firestore as the backend database provided insights into working with cloud databases, including storing file uploads and managing shareable links. Implementing file upload functionality in React taught me how to handle file input, upload files to Firestore, and generate unique shareable links for each upload. Overall, this project improved my frontend development skills and provided hands-on experience in building a functional web application with modern technologies."
    },
  ];
    

  // const Htmlprojects = [
  //   {
  //     title: "Foody Zone",
  //     description: "Landing Page",
  //     imgUrl: projImg2,
  //     Url: "https://www.youtube.com/"
  //   }
  // ];

  // const Jsprojects = [
  //   {
  //     title: "Rich Text Editor",
  //     description: "Text Editor",
  //     imgUrl: richtext,
  //     Url: "https://rich-text-editorr.vercel.app/"
  //   },
  //   {
  //     title: "Weather Forecast App",
  //     description: "Weather Forecast Application with Fake API Integration",
  //     details:
  //       "I built a weather forecast application to practice API integration using a fake weather API. Utilizing HTML, CSS, and JavaScript, I created a user-friendly interface that fetches weather data and displays the forecast for a specified location.",
  //     link: "🌐 https://nafay-weather-app.netlify.app",
  //     proficiency:
  //       "This project demonstrates my proficiency in working with APIs and my ability to develop functional web applications. It showcases my commitment to learning and improving my skills in web development.",
  //   }
  // ];

  // 
  return (
    <section className="project-container" id="portfolio">
      <img style={{
        position: "absolute",
        right: 0,
        top: 0,
        width: "500px"
      }} src={projBgImage} alt="Bg" />
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`project-content ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <div className="project-top">
                    <span className="project-title">
                      Portfolio
                    </span>
                    <h2 className="project-headline">Explore my <span className="color-primary">work</span></h2>
                  </div>
                  <div className="project-bottom">
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">HTML/CSS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">JavaScript</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">React</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              Htmlprojects.map((Htmlprojects, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...Htmlprojects}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {
                              Jsprojects.map((Jsprojects, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...Jsprojects}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {
                              Reactprojects.map((Reactprojects, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...Reactprojects}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )

}

export default Project;

// import "./projects.scss";
// import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
// import ProjectCard from "./ProjectCard.jsx";

// // import aboutImage from "../../assets/images/about2.png";
// // import HeroImage2 from "../../assets/images/10+ (1).png";
// // import scas from "../../assets/images/IMG_0093.png"
// // import ProjectModal from "./modal"

// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export default function Projects() {
//   const Htmlprojects = [
//     {
//       title: "Nft Project",
//       description: "Smit HTML/CSS Website Class Competition ",
//       details:
//         "For the Smit website Class competition, I created a captivating website using HTML and CSS. Inspired by a sleek ThemeForest template, I meticulously crafted a visually stunning replica showcasing modern web design trends.",
//       link: "🌐 https://nft-projectt.netlify.app",
//       proficiency:
//         "This project demonstrates my proficiency in HTML/CSS and my ability to replicate complex designs with precision and creativity. It's a testament to my dedication to web development excellence.",
//       // imgUrl: ProjectNft,
//     },
//     {
//       title: "Figma To Html",
//       description: "Figma to HTML/CSS Conversion",
//       details:
//         "I transformed a Figma design into a fully functional website using HTML and CSS. Inspired by the original design, I meticulously crafted each element to ensure a seamless user experience.",
//       link: "🌐 https://figmatohtmll.netlify.app",
//       proficiency:
//         "This project showcases my proficiency in HTML/CSS and my ability to translate complex designs into interactive web experiences. It reflects my dedication to delivering high-quality web solutions.",
//       // imgUrl: ProjectFigma,
//     },
//     {
//       title: "Pepsi Website Clone",
//       description: "Smit Hackathon Challenge: Pepsi Website Clone",
//       details:
//         "In the Smit Hackathon, our team was challenged to clone the Pepsi website within a tight deadline of 10 hours. Leveraging our HTML, CSS, and JavaScript skills, we worked collaboratively to recreate the Pepsi website's layout, design, and functionality.",
//       link: "🌐 https://abdulnafay-pepsi.netlify.app",
//       proficiency:
//         "This project demonstrates our proficiency in frontend web development and our ability to efficiently replicate complex designs under pressure. It highlights our commitment to delivering results within strict time constraints.",
//       // imgUrl: ProjectPepsi,
//     },
//   ];

//   const Jsprojects = [
//     {
//       title: "Watch App Filter Practice",
//       description: "JavaScript Filter Practice",
//       details:
//         "I developed a watch app filter feature as part of my JavaScript practice. Using vanilla JavaScript, I implemented filtering functionality to allow users to search for watches based on their desired criteria.",
//       link: " 🌐 https://watchapp-filter.netlify.app",
//       proficiency:
//         "This project showcases my proficiency in JavaScript and my ability to implement dynamic filtering functionality. It demonstrates my commitment to continuous learning and improvement in web development.",
//       // imgUrl: ProjectWatchApp,
//     },
//     {
//       title: "Travel Tours Website",
//       description: "Custom Travel Tours Website for Client",
//       details:
//         "I developed a bespoke travel tours website for a client, implementing a sleek and user-friendly UI using HTML, CSS, and JavaScript. Every aspect of the website was tailored to meet the client's specific requirements, ensuring a seamless browsing experience for users.",
//       link: "🌐 https://traveltourss.netlify.app",
//       proficiency:
//         "This project highlights my proficiency in frontend web development and my ability to create visually appealing and functional websites according to client specifications. It demonstrates my commitment to delivering high-quality web solutions that exceed client expectations.",
//       // imgUrl: ProjectTravelTour,
//     },
//     {
//       title: "Todo App",
//       description: "Todo List Application for Practice",
//       details:
//         "I developed a todo list application as part of my practice to enhance my JavaScript skills. Using HTML, CSS, and JavaScript, I created a simple yet functional todo app that allows users to add and delete tasks.",
//       link: "🌐 https://todoapp-nafay.netlify.app",
//       proficiency:
//         "This project demonstrates my proficiency in JavaScript and my ability to create interactive web applications. It showcases my dedication to continuous learning and improvement in web development.",
//       // imgUrl: ProjectTodoApp,
//     },
//     {
//       title: "Weather Forecast App",
//       description: "Weather Forecast Application with Fake API Integration",
//       details:
//         "I built a weather forecast application to practice API integration using a fake weather API. Utilizing HTML, CSS, and JavaScript, I created a user-friendly interface that fetches weather data and displays the forecast for a specified location.",
//       link: "🌐 https://nafay-weather-app.netlify.app",
//       proficiency:
//         "This project demonstrates my proficiency in working with APIs and my ability to develop functional web applications. It showcases my commitment to learning and improving my skills in web development.",

//       // imgUrl: ProjectWetherApp,
//     },
//     {
//       title: "Calculator App",
//       description: "Calculator Application for Practice",
//       details:
//         "I developed a calculator application as part of my practice to enhance my frontend development skills. Using HTML, CSS, and JavaScript, I created a functional calculator that performs basic arithmetic operations.",
//       link: "🌐 https://myy-calculatorr.netlify.app",
//       proficiency:
//         "This project demonstrates my proficiency in frontend web development and my ability to create interactive applications. It reflects my dedication to continuous learning and improvement in web development.",
//       // imgUrl: ProjectCalculator,
//     },
//     {
//       title: "Post App",
//       description:
//         "Post Application with Real-Time Posting and Moment.js Integration",
//       details:
//         "I created a post application where users can write and submit posts, which are then displayed in separate cards. Each card includes the post content along with the current post time, utilizing Moment.js for time formatting. This project was developed to practice frontend and real-time data updating.",
//       link: "🌐 https://postappp.netlify.app",
//       proficiency:
//         "This project demonstrates my proficiency in frontend web development, as well as my ability to integrate and utilize third-party libraries like Moment.js. It showcases my commitment to creating dynamic and user-friendly web applications",
//       // imgUrl: ProjectPostApp,
//     },
//   ];
//   const Reactprojects = [
//     {
//       title: "Air For Share",
//       description:
//         "Replica of Air For Share ",
//       details: "Exciting news! We're integrating Firebase into our AirforShare replica for real-time data sync, secure authentication, and cloud storage. Stay tuned for enhanced functionality and seamless connectivity!",
//       // imgUrl: ProjectAirForShare,
//     },
//   ];
