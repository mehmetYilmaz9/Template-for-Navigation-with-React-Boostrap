import React from 'react';

import {Container,Row,Col} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import {FormControl} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export const Contact = () => (
    <div id="section-contact" className="section-contact contact">
        <div class="contact--box">
            <Container >
                <h1>Subscribe to receive updates!</h1>
                <Row className="contact--row">
                    <Col className="contact--col">
                    <InputGroup size="lg">
                        <FormControl 
                            aria-label="Large" 
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="Enter mail address" />
                    </InputGroup>
                    </Col>
                    <Col>
                        <Button size="lg" variant="outline-warning">Subscribe</Button>
                    </Col>
                </Row>
        </Container>
        </div>
    </div>

   

);

export default Contact;