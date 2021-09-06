import React from 'react'
import "./Contact.scss"
import GoogleMaps from "simple-react-google-maps"
import Separator from "../../images/separator.png"
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

export default function Contact() {


    return (
        <section id="contact">
            <div className="contact">
                <Container fluid={true}>
                    <Row className="row-contact">
                        <Col xs={12} md={6} className="col-contact">
                            <GoogleMaps
                                apiKey={"Your Google Api Key"}
                                style={{ height: "844px", width: "100%" }}
                                zoom={16}
                                center={{ lat: -40.57539, lng: -73.1502 }}
                                markers={{ lat: -40.57539, lng: -73.1502 }}
                                apiKey="AIzaSyCGNXfV_VLpkF9hXA2xQdqUqkyLetdb6Jk"
                            />
                        </Col>
                        <Col xs={12} md={5} className="col-form">
                            <div className="shapes">
                                <h1>Contáctanos</h1>
                                <form method="post" action="#" >
                                    <label>
                                        <h2>Nombre</h2>
                                        <input type="text" name="name" id="name" className="input-form" />
                                    </label>
                                    <label>
                                        <h2>Email</h2>
                                        <input type="text" name="name" id="name" className="input-form" />
                                    </label>
                                    <label>
                                        <h2>Teléfono</h2>
                                        <input type="text" name="name" id="name" className="input-form" />
                                    </label>
                                    <label>
                                        <h2>Escribe tu mensaje</h2>
                                        <input type="text" name="name" id="name" className="input-message" />
                                    </label>
                                    <br />
                                    <Button variant="outline-warning" className="button">Enviar</Button>
                                </form>
                            </div>
                            <div className="contact-number">
                                Teléfono de contacto:
                                <br />
                                <p className="number">+56911111111</p>
                                <Image src={Separator} className="separator"></Image>
                            </div>


                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
