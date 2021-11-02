import {Component} from "react";
import {connect} from "react-redux";
import {Container, Row, Tab, Tabs} from "react-bootstrap";
import PollCards from "./PollCards";

class Home extends Component {
    render () {
        const { answeredQuestionIds, unansweredQuestionIds, } = this.props;

        return (
            <Container>
                <Row>
                    <h1>Polls</h1>
                </Row>
               <Row>
                   <Tabs
                       className="mb-3"
                   >
                       <Tab eventKey="unanswered" title="Unanswered">
                           <PollCards
                               ids={unansweredQuestionIds}
                               answered={false}
                           />
                       </Tab>
                       <Tab eventKey="answered" title="Answered">
                           <PollCards
                               ids={answeredQuestionIds}
                               answered={true}
                           />
                       </Tab>
                   </Tabs>
               </Row>
            </Container>
        )
    }
}

function mapStateToProps( {authedUser, questions, users } ) {
    const user = users[authedUser];
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

export default connect(mapStateToProps)(Home);