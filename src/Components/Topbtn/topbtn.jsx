// import "./topbtn.scss";
// import projImg2 from "../../assets/Images/coding.png";

import React, { useState, useEffect } from 'react';
import { GoMoveToTop } from "react-icons/go";


function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={handleClick}
            style={{
                display: showButton ? 'block' : 'none',
                position: 'fixed',
                bottom: 20,
                right: 30,
                zIndex: 99,
                border: 'none',
                outline: 'none',
                backgroundColor: '#F89E52',
                color: 'white',
                cursor: 'pointer',
                padding: '15px',
                borderRadius: '10px',
                fontSize: '20px',
                // fontWeight:,

            }}
        >
        <GoMoveToTop />
        </button>
    );
}

export default ScrollToTopButton;
