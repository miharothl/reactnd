import {Component} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {handleAddQuestion} from "./questionsActions";


class New extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }

    handleOptionOneChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            optionOneText: text,
        }));
    }

    handleOptionTwoChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            optionTwoText: text,
        }));
    }

    handleAddQuestion = (e) => {
        e.preventDefault();

        const {dispatch} = this.props;
        const {optionOneText, optionTwoText} = this.state;

        dispatch(handleAddQuestion(optionOneText, optionTwoText))

        this.setState(() => ({
            optionOneText: "",
            optionTwoText: "",
        }));
    }

    render() {
        const {optionOneText, optionTwoText} = this.state;

        return (
            <Container>
                <Row>
                    <h1>New Poll</h1>
                </Row>

                <Form onSubmit={this.handleAddQuestion}>
                    <Row>
                        <Col sm={4}>
                            <p className="text-capitalize text-end">Option 1</p>
                        </Col>
                        <Col sm={true}>
                            <Form.Group className="mb-3" controlId="optionOne">
                                <Form.Control onChange={this.handleOptionOneChange} placeholder="take blue pill"
                                              type="optionOne"
                                              value={optionOneText}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <p className="text-capitalize text-end">Option 2</p>
                        </Col>
                        <Col sm={true}>
                            <Form.Group className="mb-3" controlId="optionTwo">
                                <Form.Control onChange={this.handleOptionTwoChange} placeholder="take red pill"
                                              type="optionTwo"
                                              value={optionTwoText}/>

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={true}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default connect()(New);