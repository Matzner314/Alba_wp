import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./InfoAlbaS.scss"
import TechImage from "../../images/image 3.png"

export default function InfoAlbaS() {
    return (
        <div className="section">
            <Container className="box">
                <Row className="info">
                    <Col xs={5} ms={5}>
                        <div>
                            <h2 className="descriptionHeader">
                                <span className="underline">ALBA</span> es
                                para cualquier poductor lechero, que dese
                                facilitar y optimizar su producción
                            </h2>

                            <p className="descriptionBody">
                                Accede de forma rapida y facil a la información de tu campo,
                                Planea y proyecta en cambios y observa resultados en tiempo real.
                                <br />
                                <br />
                                Nuestra Interfaz esta desarrollada de forma intuitiva para que
                                tengas claridad de tus planes financieros y agronomos.

                                <p className="bold">En <span className="underline-body">ALBA</span> tu exito, es nuestro exito !</p>
                            </p>
                        </div>
                    </Col>

                    <Col xs={6} md={6} className="col-2">
                        <Image src={TechImage} class="img-fluid" alt="Responsive image" className="img"></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}