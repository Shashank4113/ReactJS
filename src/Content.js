import image from './main.png';
import './Content.css';
import React, { useState } from 'react';

const Content = () => {

    const [title, setTitle] = useState('Besant Technologies'); 

    const handleClick = () => {
        console.log('Worked Fine !!')
        setTitle('Gaurav Technologies')
    }

    const handleHover = () => {
        console.log('Mouse Hovered !!');
    }

    const handleMoveOut = () => {
        console.log('Mouse Moved Out !!');
        setTitle('Shashank Technologies ')
    }

    // Need to explain about the onMouseEnter and onMouseLeave
    
    return ( 
        <main>
            <section className="presentation">
                <div className="introduction">
                    <div className="intro-text">
                        <h1>{ title }</h1>
                        <p>Best online & classroom training institute. </p> 
                    </div>
                    <div className="cta">
                        <button className="cta-select" onClick={handleClick} onMouseOver={handleHover}>Explore</button>
                        <button className="cta-add" onMouseOut={handleMoveOut}>Start</button> 
                    </div>
                </div>
                <div className="banner">
                    <img src={ image } alt="" />
                </div>
            </section>
        </main>
     );
}
 
export default Content;
