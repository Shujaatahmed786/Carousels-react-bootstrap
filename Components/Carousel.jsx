import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "../Components/carousel.styles.css";
import Nature from '../src/assets/nature.jpg';

function Responsive() {
    return (
        <div className="slider-container">
            <Carousel>
                {/* Each Carousel.Item contains a Row with 3 Cols */}
                <Carousel.Item>
                    <Row>
                        <Col>
                            <img
                                className="d-block w-100"
                                src={Nature}
                                alt="Nature slide 1"
                            />
                            <p>Slide 1 description</p>
                        </Col>
                        <Col >
                            <img
                                className="d-block w-100"
                                src={Nature}
                                alt="Nature slide 2"
                            />
                            <p>Slide 2 description</p>
                        </Col>
                        <Col >
                            <img
                                className="d-block w-100"
                                src={Nature}
                                alt="Nature slide 3"
                            />
                            <p>Slide 3 description</p>
                        </Col>
                    </Row>
                </Carousel.Item>
                
                <Carousel.Item>
                    <Row>
                        <Col >
                            <img
                                className="d-block w-100"
                                src={Nature}
                                alt="Nature slide 4"
                            />
                            <p>Slide 4 description</p>
                        </Col>
                        <Col >
                            <img
                                className="d-block w-100"
                                src={Nature}
                                alt="Nature slide 5"
                            />
                            <p>Slide 5 description</p>
                        </Col>
                        <Col >
                            <img
                                className="d-block w-100"
                                src={Nature}
                                alt="Nature slide 6"
                            />
                            <p>Slide 6 description</p>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Responsive;
