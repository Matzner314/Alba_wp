import { Typography, Button, ButtonGroup, makeStyles, DeleteIcon } from '@material-ui/core'
import { Icon } from '@iconify/react';
import ReactPlayer from 'react-player';
import Video_ALBA from '../../videos/Pivote.mp4'
import React from 'react'
import { Link } from 'gatsby'
import "./Header.scss"



const useStyles = makeStyles((theme) => ({
    bold: {
        fontWeight: 700,
        textTransform: 'uppercase'
    },

    titleHeader: {
        marginTop: '270px',
        marginLeft: '140px',
        textTransform: 'uppercase',
        lineHeight: '25px',
        fontWeight: 'normal',
    },

    titleBody: {
        textTransform: 'uppercase',
        marginLeft: '17%',
        marginRight: '60px',
        marginTop: '15px',
        lineHeight: '34px',
        textAlign: 'justify'
    },

    buttonText: {
        textTransform: 'uppercase',
        fontSize: '25px',
        fontWeight: 'bold',
        width: '250px',
        color: '#FFFFFF'
    }
}))


export default function Header() {

    const classes = useStyles()

    const scrollToBottom = () => {
        window.scrollTo({
            top: document?.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="header">

            <div>
                <video className='wallpaper' autoPlay loop muted>
                    <source src={Video_ALBA} type='video/mp4' />
                    <div className="vector_5" />
                </video>
                <div className="wallpaper">
                    <div className="vector_5" />
                    <div className="logotype" />
                    <div className="vector_6">

                        <ButtonGroup className="SocialMedia">
                            <Button
                                className="textButton"
                                variant="text"
                                onClick={() => window.open("https://www.linkedin.com")}>{
                                    <Icon className="SocialMedia"
                                        icon="foundation:social-linkedin"
                                        color="White"
                                        width="50" />}
                            </Button>
                            <Button
                                className="textButton"
                                variant="text"
                                onClick={() => window.open("https://instagram.com")}
                            >
                                {
                                    <Icon className="SocialMedia"
                                        icon="foundation:social-instagram"
                                        color="White"
                                        width="50" />}
                            </Button>
                        </ButtonGroup>
                        {/*<Icon className="SocialMedia" icon="foundation:social-instagram" color="White" width="50" />
                        <Icon className="SocialMedia" icon="foundation:social-linkedin" color="white" width="50" />
    <Icon className="SocialMedia" icon="foundation:social-facebook" color="white" width="50" />*/}


                        <Typography variant='h5' color="primary" className={classes.titleHeader}>
                            El futuro de la administración para
                            <span className={classes.bold}> lecherías </span>
                            esta aquí
                        </Typography>

                        <Typography variant='h4' color='primary' className={classes.titleBody}>
                            Con ALBA centraliza y procesa tu información técnico-económica,
                            para planificar, evaluar y tomar deciciones oportunas
                        </Typography>

                        <ButtonGroup className="button">
                            <Button className="textButton" onClick={() => scrollToBottom()}>Contacto</Button>
                            <Button className="textButton" href="https://alba.motivus.cl/">Ingresar</Button>
                            <Button className="textButton" href="/Nosotros">Nosotros</Button>
                        </ButtonGroup>
                    </div>

                </div >
            </div>


























            {/* <div className="wallpaper">
                <div className="vector_5" />
                <div className="logotype" />
                <div className="vector_6">
                    <Icon className="SocialMedia" icon="foundation:social-instagram" color="White" width="50" />
                    <Icon className="SocialMedia" icon="foundation:social-linkedin" color="white" width="50" />
                    <Icon className="SocialMedia" icon="foundation:social-facebook" color="white" width="50" />


                    <Typography variant='h5' color="primary" className={classes.titleHeader}>
                        El futuro de la administración para
                        <span className={classes.bold}> lecherías </span>
                        esta aquí
                    </Typography>

                    <Typography variant='h4' color='primary' className={classes.titleBody}>
                        Con ALBA centraliza y procesa tu información técnico-económica,
                        para planificar, evaluar y tomar deciciones oportunas
                    </Typography>

                    <ButtonGroup className="button">
                        <Button className="textButton" onClick={() => scrollToBottom()}>Contacto</Button>
                        <Button className="textButton" href="https://alba.motivus.cl/">Ingresar</Button>
                        <Button className="textButton" >Nosotros</Button>
                    </ButtonGroup>
                </div>
            </div > */}

        </div>
    )
}
