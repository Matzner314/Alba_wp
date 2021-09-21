import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./InfoAlbaS.scss"
import TechImage from "../../images/tecFarm .png"

export default function InfoAlbaS() {
    return (
        <div className="section">
            <Container className="box">
                <Row className="info">
                    <Col xs={5} ms={5}>
                        <div>
                            <h2 className="descriptionHeader">
                                <span className="underline">ALBA</span> es
                                para cualquier poductor lechero, que desee
                                facilitar y optimizar su producción.
                            </h2>

                            <p className="descriptionBody">
                                Accede de forma rápida y fácil a la información de tu campo.
                                Descarga tu planificación y compártela con tu equipo de trabajo.
                                <br />
                                <br />
                                Nuestra interfáz esta desarrollada de forma intuitiva
                                para que tengas claridad en la organización de
                                tu plan agronómico y financiero.

                                <p className="bold">En <span className="underline-body">ALBA</span> tu exito, es nuestro exito !</p>
                            </p>
                        </div>
                    </Col>

                    <Col xs={6} md={6} className="col-2">
                        <Image src={TechImage} class="img-fluid" alt="Responsive image" className="imgg"></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}