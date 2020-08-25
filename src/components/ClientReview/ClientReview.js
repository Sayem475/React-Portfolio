import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import me from "../.././asset/images/me.jpg";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            infinite: true,
            speed: 2000,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <Container>
                    <h1 className="serviceMainTitle text-center">CLIENT REVIEW</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} sm={6} md={6}>

                                    <img className="circleImg" src={me} />
                                    <h1 className="serviceName">Web development</h1>
                                    <p className="serviceDes">You design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>

                                </Col>

                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} sm={6} md={6}>
                                    <img className="circleImg" src={me} />
                                    <h1 className="serviceName">Web development</h1>
                                    <p className="serviceDes">You design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>

                                </Col>

                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} sm={6} md={6}>
                                    <img className="circleImg" src={me} />
                                    <h1 className="serviceName">Web development</h1>
                                    <p className="serviceDes">You design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>

                                </Col>

                            </Row>
                        </div>


                    </Slider>

                </Container>


            </>
        );
    }
}

export default ClientReview;
