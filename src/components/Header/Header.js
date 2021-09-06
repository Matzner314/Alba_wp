import { Typography, Button, ButtonGroup } from '@material-ui/core'
import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import "./Header.scss"

export default function Header() {

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas rhoncus auctor ex cursus pulvinar. Ut rutrum,
                            leo in vestibulum fermentum, libero eros rhoncus
                            odio, et rutrum velit metus et ligula.
                        </Typography>

                        <ButtonGroup className="button">
                            <Button className="textButton" onClick={() => scroll.scrollToBottom()}>Contact</Button>
                            {/* <Button className="textButton"><Link to="contact">Contact</Link></Button> */}
                            <Button className="textButton">Free Tour</Button>
                        </ButtonGroup>

                    </div>
                </div>
            </div >
        </div >
    )
}
