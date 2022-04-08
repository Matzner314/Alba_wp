import { Typography, Button, ButtonGroup, makeStyles } from '@material-ui/core'
import React from 'react'
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
            <div className="wallpaper">
                <div className="vector_5" />
                <div className="logotype" />
                <div className="vector_6">

                    <div>
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
                        </ButtonGroup>
                    </div>
                </div>
            </div >
        </div >

    )
}
