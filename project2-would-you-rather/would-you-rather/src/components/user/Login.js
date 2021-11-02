import {Component} from "react";
import {connect} from "react-redux";
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {setAuthedUser} from "./userActions";

class Login extends Component {

    state = {
        selectedUser: null
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        this.props.dispatch(
            setAuthedUser(this.state.selectedUser)
        )
    }

    handleOnChange = (e) => {
        e.preventDefault()

        this.setState({
            selectedUser: e.target.value
        })
    }


    render() {
        const { users } = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Login</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs lg={6}>
                        <Form onSubmit={this.handleOnSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Select user"
                                className="mb-3"
                            >
                                <Form.Select defaultValue="default" onChange={this.handleOnChange}>
                                    <option value="default" disabled hidden></option>
                                    {Object.values(users).map((user) => {
                                       return (
                                           <option key={user.id} value={user.id}>{user.name}</option>
                                       )
                                    })}
                                </Form.Select>
                            </FloatingLabel>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }

}

export default connect(mapStateToProps)(Login);