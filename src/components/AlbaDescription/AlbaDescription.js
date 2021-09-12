import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "./AlbaDescriptio.scss"
import image1 from "../../images/background_header.png"
import image2 from "../../images/description1.png"
import Finanzas from "../../images/Finanzas.jpg"
//import { Carousel } from 'react-bootstrap';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        color: 'pink',
        marginTop: '20px',
    },
    indicator: {
        backgroundColor: '#5FAA00',
    },
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
                            centered
                            variant="fullWidth"
                            classes={{
                                indicator: classes.indicator
                            }}
                        >
                            <Tab className={classes.font} label="Planificación" className="tabbs" />
                            <Tab label="Balance Forrajero" />
                            <Tab label="Finanzas" />
                        </Tabs>
                    </Paper>
                    <TabPanel value={value} index={0}>
                        <Box className="tab-box">
                            <div>

                                {/* <Carousel fade={true} controls={false}>
                                    <Carousel.Item> */}
                                <div className="div-margin">
                                    <img
                                        className="image-style"
                                        src={image2}
                                        alt="First slide"
                                    />
                                </div>
                                <div>
                                    <Typography className="text-style1">
                                        Planificación Agronómica
                                    </Typography>
                                </div>
                                <br />
                                <div>
                                    <Typography className="text-style2">
                                        Utiliza las plantillas de manejos para ingresar las diferentes labores agrícolas.
                                        Determina la distribución de cultivos en todos tus potreros.
                                        Exporta tu planificación para ser utilizada de guia en terreno.
                                        Guarda tus registros y contruye un historial de manejos en tu campo
                                    </Typography>
                                </div>
                                {/* <Carousel.Caption>
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
                                                    Modulo de Finanzas
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

                                </Carousel> */}
                            </div>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div>
                            <Box className="tab-box">
                                <div>

                                    {/* <Carousel fade={true} controls={false}>
                                        <Carousel.Item> */}
                                    <div className="div-margin">
                                        <img
                                            className="image-style2"
                                            src={image1}
                                            alt="First slide"
                                        />
                                    </div>
                                    <div>
                                        <Typography className="text-style1">
                                            Balance Forrajero
                                        </Typography>
                                    </div>
                                    <br />
                                    <div>
                                        <Typography className="text-style2">
                                            Simula tus objetivos en desarrollo de masa ganadera y
                                            producción de forrajes. Optimiza los cultivos que
                                            incorporas a tu planificación y la importación de alimentos,
                                            de acuerdo a los requerimientos de tu ganado. Visualiza
                                            los resultados de tus simulaciones en gráficos intuitivos y datos brutos.
                                        </Typography>
                                    </div>
                                    {/* <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item pause={false}>
                                            <div className="div-margin">
                                                <img
                                                    className="image-style2"
                                                    src={image2}
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

                                    </Carousel> */}
                                </div>
                            </Box>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div>
                            <div>
                                <Box className="tab-box">
                                    <div>

                                        {/* <Carousel fade={true} controls={false}>
                                            <Carousel.Item> */}
                                        <div className="div-margin">
                                            <img
                                                className="image-style"
                                                src={Finanzas}
                                                alt="First slide"
                                            />
                                        </div>
                                        <div>
                                            <Typography className="text-style1">
                                                Finanzas
                                            </Typography>
                                        </div>
                                        <br />
                                        <div>
                                            <Typography className="text-style2">
                                                Recupera tus facturas desde el SII y clasifica todos tus gastos e ingresos.
                                                Analiza tu estado de resultado de los ultimos doce meses en cualquier
                                                momento del año, exporta tus resultados y trabaja tus datos.
                                            </Typography>
                                        </div>
                                        {/* <Carousel.Caption>
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
                                                            Balance Forrajero
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

                                        </Carousel> */}
                                    </div>
                                </Box>
                            </div>
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