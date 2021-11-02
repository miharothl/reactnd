import React, {Component} from "react";
import {connect} from "react-redux";
import {Col, Container, Form, Image, Row} from "react-bootstrap";

class PollResult extends Component {

    state = {
        selectedOption: null
    }

    componentDidMount() {
        const {id, user} = this.props;

        this.setState({
            selectedOption: user.answers[id]
        });
    }

    render() {
        const {question, author} = this.props;

        const countOptionOne = question.optionOne.votes.length;
        const countOptionTwo = question.optionTwo.votes.length;

        const total = countOptionOne + countOptionTwo;

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
                <Row>
                    <Col sm={3}>
                        <p className="text-capitalize text-end"></p>
                    </Col>
                    <Col sm={true}>
                        <Form.Check
                            type={'radio'}
                            id='radioOptionOne'
                            checked={this.state.selectedOption === 'optionOne'}
                            disabled={true}
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
                    <Col>
                        <p>{`${countOptionOne} (${(countOptionOne / total * 100)
                            .toLocaleString('en', {maximumFractionDigits: 2})}%) selected this option.`}</p>
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
                            disabled={true}
                            checked={this.state.selectedOption === 'optionTwo'}
                            label={question['optionTwo']['text']}
                            onChange={this.handleOnChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <p className="text-capitalize text-end"></p>
                    </Col>
                    <Col>
                        <p>{`${countOptionTwo} (${(countOptionTwo / total * 100)
                            .toLocaleString('en', {maximumFractionDigits: 2})}%) selected this option.`}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const {id} = props;
    const question = questions[id]
    const user = users[authedUser]
    const author = users[question['author']]

    return {
        id,
        question,
        user,
        author,
    };
}

export default connect(mapStateToProps)(PollResult);
