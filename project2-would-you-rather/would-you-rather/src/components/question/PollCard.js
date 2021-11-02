import {Component} from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class PollCard extends Component {

    timeSince(date) {
        let seconds = Math.floor((new Date() - date) / 1000);

        let interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    render() {
        const {id, users, questions, answered} = this.props;
        const question = questions[id]
        const buttonText = answered === true ? 'View Result' : 'Answer Poll'

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <Card className='mt-3'>
                            <Card.Header>
                                <Row>
                                    <Col>Would you rather by {users[question.author].name}</Col>
                                    <Col
                                        className="text-end text-muted">{this.timeSince(questions[id].timestamp)} ago</Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{question.optionOne.text} or ...</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Link key={id} to={`/questions/${id}`} className="tweet">
                                    <Button variant="primary">{buttonText}</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({questions, users}) {

    return {
        questions,
        users,
    };
}

export default withRouter(connect(mapStateToProps)(PollCard));
