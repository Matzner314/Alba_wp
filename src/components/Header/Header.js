import { Typography, Button, ButtonGroup } from '@material-ui/core'
import React from 'react'
import "./Header.scss"

export default function Header() {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document?.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (

        <div className="header">
            <div className="wallpaper">
                <div className="vector_5" />
                <div className="logotype" />
                <div className="vector_6">

                    <div>
                        <Typography className="textHeader">
                            El futuro de la administración para
                            <span className="underline"> lecherías </span>
                            esta aquí
                        </Typography>

                        <Typography className="textBody">
                            Con ALBA centraliza y procesa tu información técnico-económica,
                            para planificar, evaluar y tomar deciciones oportunas
                        </Typography>

                        <ButtonGroup className="button">
                            <Button className="textButton" onClick={() => scrollToBottom()}>Contact</Button>
                            <Button className="textButton" href="https://alba.motivus.cl/">Login</Button>
                        </ButtonGroup>

                    </div>
                </div>
            </div >
        </div >
    )
}
