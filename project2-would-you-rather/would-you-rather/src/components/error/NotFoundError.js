import React, { Component } from 'react';
import {Col, Container, Row} from "react-bootstrap";

export class NotFoundError extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm lg={6}>
                        <h1>Error</h1>
                        <p>404 Not Found. Please use the menu to try again.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NotFoundError;