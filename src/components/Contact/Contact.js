import React from 'react'
import "./Contact.scss"
import Separator from "../../images/separator.png"
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react';

const iconStyle = {
    borderRadius: '100px',
    boxShadow: '3px 3px 1px #888888'
}

const AnyReactComponent = ({ text }) => {
    return (
        <div>
            <Icon icon="location-filled" color="White" width="50"
            />
            <h6>{text}</h6>
        </div>
    )
}



export default function Contact() {


    return (
        <section id="contact">
            <div className="contact">
                <Container fluid={true}>
                    <Row className="row-contact">
                        <Col xs={6} md={6} className="col-contact">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyCdmyz_1zBhxCrsYm15R11W9pdnsiUFyFA" }}
                                defaultCenter={{ lat: -40.581710, lng: -73.134155 }}
                                defaultZoom={16}
                            >
                                <AnyReactComponent
                                    lat={-40.581710}
                                    lng={-73.134155}
                                    text="Oficinas Alba (Matta 1248)"

                                />
                            </GoogleMapReact>
                        </Col>
                        <Col xs={6} md={6} className="col-form">
                            <div className="shapes">
                                <h1>Contáctanos</h1>
                                <form method="post" action="https://formspree.io/f/mbjqwlbq">
                                    <label>
                                        <h2>Nombre</h2>
                                        <input type="text" name="Nombre" id="name" className="input-form" required />
                                    </label>
                                    <label>
                                        <h2>Email</h2>
                                        <input type="email" name="Correo" id="Email" className="input-form" required />
                                    </label>
                                    <label>
                                        <h2>Teléfono</h2>
                                        <input type="text" name="Teléfono" id="phone" className="input-form" />
                                    </label>
                                    <label>
                                        <h2>Escribe tu mensaje</h2>
                                        <input type="text" name="Mensaje" id="message" className="input-message" required />
                                    </label>
                                    <br />
                                    <Button type="submit" variant="outline-warning" className="button">Enviar</Button>
                                </form>
                            </div>
                            <div className="contact-number">
                                Teléfono de contacto:
                                <br />

                                <p className="number">+56985972891 - Christian Matzner, +56997003470 - Pablo Loaiza</p>

                                <Image src={Separator} className="separator"></Image>
                            </div>


                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
