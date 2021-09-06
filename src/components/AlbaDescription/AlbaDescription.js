import React from 'react';
import { makeStyles, Typography, } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "./AlbaDescriptio.scss"
import { Box } from '@material-ui/core';
import image1 from "../../images/background_header.png"
import image2 from "../../images/description1.png"
import { Carousel } from 'react-bootstrap';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        color: 'back',
        marginTop: '20px',
    },
    font: {
        color: 'black',
        hoverBackgroundColor: 'green'
    }
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="margin-info">
            <Box marginTop={15}>
                <div>
                    <h1 className="info-title">En <span className="info-underline">ALBA</span> podras
                        encontrar los siguientes modulos y funcionalidades</h1>
                </div>
                <div>
                    <Paper className={classes.font}>

                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            ScrollButtonComponent
                            centered
                            variant="fullWidth"
                        >
                            <Tab className={classes.font} label="Finanzas" className="tabbs" />
                            <Tab label="Panificación" />
                            <Tab label="Balance Forrajero" />
                        </Tabs>
                    </Paper>
                    <TabPanel value={value} index={0}>
                        <Box className="tab-box">
                            <div>

                                <Carousel fade={true} controls={false}>
                                    <Carousel.Item>
                                        <div className="div-margin">
                                            <img
                                                className="image-style"
                                                src={image2}
                                                alt="First slide"
                                            />
                                        </div>
                                        <div>
                                            <Typography className="text-style1">
                                                Calendario de manejos
                                            </Typography>
                                        </div>
                                        <br />
                                        <div>
                                            <Typography className="text-style2">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Curabitur efficitur diam non nulla dignissim ornare.
                                                In interdum euismod tellus, sit amet viverra sem feugiat quis.
                                                Phasellus elementum diam et nulla consequat, non placerat
                                                sem eleifend. Donec semper sollicitudin felis, sed varius orci interdum ut.
                                            </Typography>
                                        </div>
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item pause={false}>
                                        <div className="div-margin">
                                            <img
                                                className="image-style2"
                                                src={image1}
                                                alt="First slide"
                                            />
                                        </div>
                                        <div>
                                            <div>
                                                <Typography className="text-style1">
                                                    Calendario de manejos
                                                </Typography>
                                            </div>
                                            <br />
                                            <Typography className="text-style2">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Curabitur efficitur diam non nulla dignissim ornare.
                                                In interdum euismod tellus, sit amet viverra sem feugiat quis.
                                                Phasellus elementum diam et nulla consequat, non placerat
                                                sem eleifend. Donec semper sollicitudin felis, sed varius orci interdum ut.
                                            </Typography>
                                        </div>
                                    </Carousel.Item>

                                </Carousel>
                            </div>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div>
                            <Box className="tab-box">
                                Planificación
                            </Box>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div>
                            <Box className="tab-box">
                                Balance Forrajero
                            </Box>
                        </div>
                    </TabPanel >
                </div>
            </Box>
        </div>
    );
}

function TabPanel(props) {
    const { children, value, index } = props
    return (
        <div>
            {
                value === index &&
                <h1>{children}</h1>
            }
        </div>
    )
}