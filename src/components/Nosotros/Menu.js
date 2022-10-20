import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Typography, Button, ButtonGroup, makeStyles, Grid } from '@material-ui/core';
import './Menu.css';

const Cabecera = () => {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document?.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (

        <header className="Cabecera">
            <div className="divCabecera">
                <button
                    onClick={toggleMenu}
                    className="Cabecera-button">
                    <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>


            <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">
                        <hr />
                        <Button
                            variant="text"
                            onClick={() => window.open("https://www.linkedin.com")}>{
                                <Icon
                                    icon="foundation:social-linkedin"
                                    color="#5e5e5e"
                                    width="50" />}
                        </Button>
                    </a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">
                        <hr />
                        <Button
                            variant="text"
                            onClick={() => window.open("https://instagram.com")}
                        >
                            {
                                <Icon
                                    icon="foundation:social-instagram"
                                    color="#5e5e5e"
                                    width="50" />}
                        </Button>
                    </a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">
                        <hr />
                        <Button
                            variant="text"
                            onClick={() => scrollToBottom()}
                        >
                            {
                                <Icon
                                    icon="bxs:message-alt-detail"
                                    color="#5e5e5e"
                                    width="50" />}
                        </Button>
                    </a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">
                        <hr />
                        <Button
                            variant="text"
                            href="/Index"
                        >
                            {
                                <Icon
                                    icon="akar-icons:arrow-back-thick-fill"
                                    color="#5e5e5e"
                                    width="50" />}
                        </Button>
                    </a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">
                        <hr />
                        <Button
                            variant="text"
                        >
                            {
                                <Icon
                                    icon="bi:arrow-up-square-fill"
                                    color="#5e5e5e"
                                    width="40" />}
                        </Button>
                        <hr />
                    </a></li>
                </ul>
            </nav>

        </header>




    )
}

export default Cabecera