import {Component} from "react";
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import QuestionsList from "./QuestionsList";

class Dashboard extends Component {
    render () {
        const { questions, user, answeredQuestionIds, unansweredQuestionIds, } = this.props;

        console.log(questions)
        console.log(user)
        console.log(answeredQuestionIds)
        console.log(unansweredQuestionIds)

        return (
            <Container>
                <Row>
                    <Col>
                       <h1>Unanswered</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <QuestionsList
                           ids={unansweredQuestionIds}
                           answered={false}
                       />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Answered</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <QuestionsList
                            ids={answeredQuestionIds}
                            answered={true}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps( {authedUser, questions, users } ) {

    const user = users[authedUser];
    console.log(Object.keys(user.answers));

    const answerIds = Object.keys(user.answers);

    const answeredQuestionIds =  Object.keys(questions).filter((id) =>
        answerIds.includes(id)).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const unansweredQuestionIds =  Object.keys(questions).filter((id) =>
        !answerIds.includes(id)).sort( (a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        questions,
        user,
        answeredQuestionIds,
        unansweredQuestionIds,
    }
}

export default connect(mapStateToProps)(Dashboard);