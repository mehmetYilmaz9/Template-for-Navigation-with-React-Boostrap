import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import  {GoCheck} from 'react-icons/go';

export const Services = () => (
    <div id="section-service" className="service section-service">
        <Container>
            <Row>
                <Col sm>
                    <div className="service--compo"> 
                        <div>
                            <FaBeer className="react-icons" />
                        </div>
                        
                        <div>
                        <p className="service--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus egestas velit. 
                            ie sed ligula et euismod. Pellentesque elementum massa sit amet justo tristique, s
                            it amet accumsan ex finibus. Maecenas ante lacus, 
                            convallis tempor lacus nec, rhoncus luctus quam.
                        </p>
                        </div>
                    </div>
                </Col>

                <Col sm>
                    <div className="service--compo"> 
                        <div>
                            <AiFillHeart className="react-icons" />
                        </div>
                        
                        <div>
                        <p className="service--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus egestas velit. 
                        ie sed ligula et euismod. Pellentesque elementum massa sit amet justo tristique, s
                        it amet accumsan ex finibus. Maecenas ante lacus, 
                        convallis tempor lacus nec, rhoncus luctus quam.
                        </p>
                        </div>

                    </div>
                </Col>

                <Col sm>
                <div className="service--compo"> 
                    <div>
                    <GoCheck className="react-icons" />
                    </div>
                    
                    <div>
                    <p className="service--text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus egestas velit. 
                    ie sed ligula et euismod. Pellentesque elementum massa sit amet justo tristique, s
                    it amet accumsan ex finibus. Maecenas ante lacus, 
                    convallis tempor lacus nec, rhoncus luctus quam.
                     
                    </p>
                    </div>

                </div>
                 </Col>
            </Row>
        </Container>
    </div>

   

);

export default Services;