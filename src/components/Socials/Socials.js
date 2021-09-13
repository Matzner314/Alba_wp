import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./Socials.scss"
import Motivus from "../../images/motivus.png"
import Corfo from "../../images/corfo.png"
import Sii from "../../images/sii.png"
import Dairylink from "../../images/dairylink.png"
import LogoGob from "../../images/logo-gob.png"

export default function Socials() {
    return (
        <div>
            <div>
                <h1 className="title">Alianzas</h1>
            </div>
            <div className="socials-box">
                {/* <Container>
                    <Row className="definition"> */}
                {/* <Col xs={12} md={6} xl={3}> */}
                <Image src={Motivus} className="form-m"></Image>
                {/* </Col >
                <Col xs={12} md={6} xl={3}> */}
                <Image src={Corfo} className="form-c"></Image>
                {/* </Col>
                <Col xs={12} md={6} xl={3}> */}
                <Image src={LogoGob} className="form-l"></Image>
                {/* </Col>
                <Col xs={12} md={6} xl={3}> */}
                <Image src={Dairylink} className="form-d"></Image>
                {/*/</Col>
                 </Row>
                </Container> */}
            </div>
        </div>


    )
}
