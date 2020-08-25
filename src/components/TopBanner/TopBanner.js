import React, { Component } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import '../../asset/css/custom.css';

class TopBanner extends Component {
    render() {
        return (
            <>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className='topTitle'>
                                        <span className="text-danger"> Hello Guys!!</span> I'm Sayem Uddin
                                    </h1>

                                    <h2 className="topSubtitle"><span className="text-danger">&</span></h2>
                                    <h4 className="topSubtitle"> I'm a Full Stack Web Developer</h4>
                                    <Button variant="primary">More Info</Button>


                                </Col>

                            </Row>


                        </Container>

                    </div>

                </Container>

            </>
        );
    }
}

export default TopBanner;
