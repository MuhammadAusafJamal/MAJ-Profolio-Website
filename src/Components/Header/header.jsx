import './header.scss';
import logo from '../../assets/Images/ll.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

// function NavScrollExample() {
//     return (
//         <header className='header-container'>
//             <div className='logo-container'>
//                 <img className="logo" src={logo} alt='LOGO' />
//             </div>
//             <div className='nav-container'>
//                 <ul className='list'>
//                     <li>Home</li>
//                     <li>Home</li>
//                     <li>Home</li>
//                     <li>Home</li>
//                 </ul>
//             </div>
//             <div className='btn-container' >
//                 <button className='btn'>Download CV</button>
//             </div>
//         </header>


//     )
// }

function NavScrollExample() {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <Navbar expand="lg" className={`bg-body-tertiary header-container ${scrolled ? "sticky-header" : ""}`}>
            <Container  fixed className='container'>
                <Navbar.Brand href="#" className='logo-container'>
                    <img className="logo" src={logo} alt='LOGO' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 list"
                        // style={{ Height: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                    <Button className='main-btn'>Download CV</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavScrollExample;
















