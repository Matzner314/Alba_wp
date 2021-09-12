import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./InfoAlba.scss"
import plataformImage from "../../images/fotomontaje 1.png"

export default function InfoAlba() {
    return (
        <div className="section">
            <Container className="box">
                <Row className="info">
                    <Col xs={6} ms={6}>
                        <Image src={plataformImage} class="img-fluid" alt="Responsive image"></Image>
                    </Col>

                    <Col xs={5} md={5}>
                        <div>
                            <h2 className="descriptionHeader">
                                <span className="underline">ALBA</span> es una
                                aplicación web que te ayudará
                                a manejar todo el ecosistema de tu
                                campo lechero
                            </h2>

                            <p className="descriptionBody">Con <span className="underline-body">ALBA</span> podrás
                                planificar los trabajos a realizar
                                durante el año, definir presupuestos, evaluar tus finanzas,
                                manejar tus potreros y optimizar tu elección
                                de cultivos utilizando modelación matemática.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        // <div className="section">
        //     <Grid container>
        //         <Grid item xs={6}>
        //             <Box boxShadow={4}>
        //                 <div className="box">
        //                     <img src={PlataformImage} />
        //                 </div>
        //             </Box>
        //         </Grid>
        //         <Grid item xs={6}>
        //             <Box boxShadow={4}>
        //                 <div className="box">
        //                     hola
        //                 </div>
        //             </Box>
        //         </Grid>

        //     </Grid>
        // </div> */}
    )
}
