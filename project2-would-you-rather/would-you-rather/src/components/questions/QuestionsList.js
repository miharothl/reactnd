import {Component} from "react";
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";

class QuestionsList extends Component {

    toDate(timestamp) {
        const date = new Date(timestamp);
        return `${date.getFullYear()}-` +
            `${date.getMonth().toLocaleString('en',{minimumIntegerDigits: 2})}-` +
            `${date.getDate().toLocaleString('en',{minimumIntegerDigits: 2})} at ` +
            `${date.getHours().toLocaleString('en',{minimumIntegerDigits: 2})}:` +
            `${date.getMinutes().toLocaleString('en',{minimumIntegerDigits: 2})}`
    }

    render () {
        const { ids, questions, users } = this.props;

        return (
            <Container>
                <ul>
                    {ids.map((id) => {
                        return (
                            <Link key={id} to={`/questions/${id}`} className="tweet">
                                <li key={id}>{`by ${users[questions[id].author].name} at ${this.toDate(questions[id].timestamp)}`}</li>
                            </Link>
                        )
                    })}
                </ul>
            </Container>
        )
    }
}

function mapStateToProps( { questions, users } ) {
    return {
        questions,
        users,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionsList));