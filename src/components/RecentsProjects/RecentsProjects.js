import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RecentsProjects extends Component {
    render() {
        return (
            <>
                <Container classname="text-center">
                    <h1 className="serviceMainTitle text-center">RECENT PROJECTS</h1>
                    <Row>
                        <Col lg={4} md={8} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="outline-primary"><Link className="link-style" to='/projects'>Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={8} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="outline-primary"><Link className="link-style" to='/projects'>Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={8} sm={12} className="p-2">

                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="outline-primary"><Link className="link-style" to='/projects'>Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </>
        );
    }
}

export default RecentsProjects;
