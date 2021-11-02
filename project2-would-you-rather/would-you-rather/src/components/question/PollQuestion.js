import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {handleSaveAnswer} from "./questionActions";
import {Redirect, withRouter} from "react-router-dom";

class PollQuestion extends Component {

    state = {
        selectedOption: null,
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleSaveAnswer(this.props.question.id, this.state.selectedOption))
    }

    handleOnChange = (event) => {
        const target = event.target;
        const name = target.name;

        this.setState({
            selectedOption: name
        });
    }

    render() {
        const {question, author} = this.props;

        if (author === null) {
            return <Redirect to="/errorNotFound"/>;
        }

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs lg={6}>
                        <h1>Would You Rather</h1>
                    </Col>
                    <Col xs={2} className="justify-content-center">
                        <Image className="justify-content-center" src={author.avatarURL} fluid roundedCircle/>
                        <p className="text-center">{author.name}</p>
                    </Col>
                </Row>
                <Form onSubmit={this.handleOnSubmit}>
                    <Row>
                        <Col sm={3}>
                            <p className="text-capitalize text-end"></p>
                        </Col>
                        <Col sm={true}>
                            <Form.Check
                                type={'radio'}
                                id='radioOptionOne'
                                checked={this.state.selectedOption === 'optionOne'}
                                name='optionOne'
                                label={question['optionOne']['text']}
                                onChange={this.handleOnChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <p className="text-capitalize text-end"></p>
                        </Col>
                        <Col sm={true}>
                            <Form.Check
                                type={'radio'}
                                name='optionTwo'
                                id='radioOptionTwo'
                                checked={this.state.selectedOption === 'optionTwo'}
                                label={question['optionTwo']['text']}
                                onChange={this.handleOnChange}
                            />
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

function mapStateToProps({authedUser, questions, users}, props) {
    const {id} = props;
    const question = questions[id]
    const author = question ? users[question['author']] : null;

    return {
        id,
        question,
        author,
    };
}

export default withRouter(connect(mapStateToProps)(PollQuestion));