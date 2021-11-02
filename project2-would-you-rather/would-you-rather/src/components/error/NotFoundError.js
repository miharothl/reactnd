import React, { Component } from 'react';
import {Container} from "react-bootstrap";

export class NotFoundError extends Component {
    render() {
        return (
            <Container textAlign="center">
                <h1>Error</h1>
                <p>404 Not Found. Please use the menu to try again.</p>
            </Container>
        );
    }
}

export default NotFoundError;