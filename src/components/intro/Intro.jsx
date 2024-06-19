import React from 'react'
import './Intro.css'

const Intro = () => {
    return (
        <section id="intro" className="intro">
            <header className="Intro-header">
                <h1>Hello welcome</h1>
                <div className="image-container">
                    <img src={`${process.env.PUBLIC_URL}/images/character.png`} alt="My Photo" className="my-photo"/>
                </div>
            </header>            
        </section>
    )
}

export default Intro