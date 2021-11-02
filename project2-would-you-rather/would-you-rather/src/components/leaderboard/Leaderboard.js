import {Component} from "react";
import {connect} from "react-redux";
import {Container, Row} from "react-bootstrap";
import PlayerCard from "./PlayerCard";

class Leaderboard extends Component {
    render() {

        const {userIds} = this.props;

        return (
            <Container>
                <Row>
                    <h1>Leaders</h1>
                </Row>
                {userIds.map((id) => {
                    return (<Row key={id}>
                            <PlayerCard id={id}/>
                        </Row>
                    )
                })}
            </Container>
        )
    }
}

function mapPropsToState({users}) {

    const sortedIds = Object.keys(users).sort((a, b) => {
        const scoreA = Object.keys(users[a].answers).length + users[a].questions.length
        const scoreB = Object.keys(users[b].answers).length + users[b].questions.length

        return scoreB - scoreA
    })

    return {
        userIds: sortedIds
    }
}

export default connect(mapPropsToState)(Leaderboard);
