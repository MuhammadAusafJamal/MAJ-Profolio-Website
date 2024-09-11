import './App.scss'
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Hero from './Components/Hero/hero';
import Service from './Components/Service/services';
import About from './Components/About/about';
import Project from './Components/Project/Projects';
import Contact from './Components/Contact/contact';
import Skill from './Components/Skill/skill';
import ScrollToTopButton from './Components/Topbtn/topbtn';


function App() {
  return (
    <>
      {/* <Header />
      <Hero />
      <About />
      <Skill/>
      <Service/>
      <Project />
      <Contact/>
      <Footer />
      <ScrollToTopButton/> */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        background: 'white'
      }}>
        <h1>

          Website is Currently Under Development.
          Sorry for the inconvenience
        </h1>
      </div>
    </>
  );
}
export default App;
