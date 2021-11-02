import React, {Component} from "react";
import {Col, Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthedUser} from "../user/userActions";

class Navigator extends Component {

    handleLogout = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(null))
    }

    render() {
        const {authedUser, user} = this.props;

        return (
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <>
                        <Navbar.Brand as={Link} to="/">Would You Rather</Navbar.Brand>
                        {
                            authedUser !== null && (
                                <>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link as={Link} to="/new">New Poll</Nav.Link>
                                            <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                                        </Nav>
                                        <Nav className="justify-content-end">
                                            <NavDropdown title={user.name} id="collasible-nav-dropdown">

                                                <NavDropdown.Item disabled={true}>
                                                    <Col xs="2" md="6">
                                                        <Image className="text-end" src={user.avatarURL} fluid
                                                               roundedCircle/>
                                                    </Col>

                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={this.handleLogout} as={Link}
                                                                  to="/login">Logout</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>

                                    </Navbar.Collapse>
                                </>
                            )
                        }
                    </>
                </Container>
            </Navbar>
        )
    }
}

function mapStateToProps({authedUser, users}) {

    const user = users[authedUser];
    return {
        authedUser,
        user,
    };
}

export default connect(mapStateToProps)(Navigator);
