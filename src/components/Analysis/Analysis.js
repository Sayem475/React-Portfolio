import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data:[

                {Technology:"HTML",Knowledge:100},
                {Technology:"CSS",Knowledge:95},
                {Technology:"JS",Knowledge:50},
                {Technology:"Python",Knowledge:100},
                {Technology:"Django",Knowledge:98},
                // {Technology:"Django Framework",Knowledge:95},
                {Technology:"REST",Knowledge:90},
                {Technology:"REACT JS",Knowledge:80}

            ]

        }
    }

    render() {
       var blue= "rgba(0, 115, 230, 0.7)";
        return (
            <>
                <Container className="text-center">
                    <h1 className="serviceMainTitle text-center">Technology Used</h1>
                    <Row>
                        <Col lg={6} sm={12} md={12}>
                            <p className="serviceDes text-justify">
                                To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB.

                                Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.

                                According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.
                            </p>
                        </Col>
                        
                        <Col lg={6} sm={12} md={12} style={{width:"100%",height:"300px"}}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Knowledge" fill={blue}>
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>


                        </Col>

                    </Row>

                </Container>

            </>
        );
    }
}

export default Analysis;
