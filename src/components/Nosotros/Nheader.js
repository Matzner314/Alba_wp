import React from "react"
import { makeStyles, Grid } from '@material-ui/core';
import logo from '../../images/gatsby-icon.png'
import banner from '../../images/Fotos 2.0/176.jpg'
import logo_1 from '../../images/Fotos 2.0/letra_alba.png'
import Menu from './Menu'
// leon, cobra y escorpion

const useStyles = makeStyles({
    paddingPage: {
        paddingTop: '5px',
        paddingLeft: '10px'

    },
    padding: {
        paddingLeft: '80px',
        paddingRight: '80px'
    },
    banner: {
        width: '100%',
        height: '650px',
        objectFit: 'cover'
    },
    logo: {
        width: '60px'
    },
    logo_1: {
        float: 'right',
        paddingTop: '30px',
        paddingRight: '15px',
        width: '70px'
    },

    linkedIn: {
        paddingTop: '12px',
        marginRight: '10px',
        float: 'right'
    },
    instagram: {
        float: 'right',
        paddingTop: '12px'
    },
    menuu: {
        float: 'right',
        paddingRight: '80px',
    },
    about: {
        float: 'right',
        paddingRight: '50px',
        paddingTop: '20px',
        fontFamily: 'Roboto Slab',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '25px',
        color: '#3c3c3c'
    },
    aboutUs: {
        position: 'absolute',
        top: '634px',
        backgroundColor: 'grey',
        fontSize: '25px',
        width: '30%',
        height: '100px'
    },
    aboutUstext: {
        fontFamily: 'Roboto Slab',
        fontWeight: 'bold',
        color: 'white',
        paddingTop: '27px',
        paddingLeft: '10px'
    }
});



export default function Header() {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid>
                <div className={classes.paddingPage}>
                    <img
                        src={logo}
                        className={classes.logo}
                    />
                    <img
                        src={logo_1}
                        className={classes.logo_1}

                    />
                    <p className={classes.about}>nosotros</p>


                </div>
                <div className={classes.menuu}>
                    <Menu />
                </div>

                <div className={classes.padding}>
                    <div className={classes.space} />
                    <div className={classes.aboutUs}>
                        <p className={classes.aboutUstext}>
                            sobre nosotros
                        </p>
                    </div>
                    <img
                        className={classes.banner}
                        src={banner}
                    />

                </div>
            </Grid>
        </React.Fragment>

    )
}
