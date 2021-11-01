import {Component} from "react";
import {connect} from "react-redux";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {handleSaveAnswer} from "./questionsActions";

class Question extends Component {

    state = {
        selectedOption: null,
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleSaveAnswer(this.props.question.id, this.state.selectedOption))
    }

    handleOnChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            selectedOption: name
        });
    }

    render () {
        const {id, question, user} = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Would You Rather</h1>
                    </Col>
                    <Col xs={1} >
                        <Image className="text-end" src={user.avatarURL} fluid roundedCircle/>
                        <p>{user.name}</p>
                    </Col>
                </Row>

                <Form onSubmit={this.handleOnSubmit}>
                    <Row>
                       <Col sm={3}>
                            <p className="text-capitalize text-end"> </p>
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
                            <p className="text-capitalize text-end"> </p>
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

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params;
    const question = questions[id]
    const user = users[question['author']]

    return {
        id,
        question,
        user,
    };
}


export default connect(mapStateToProps)(Question);