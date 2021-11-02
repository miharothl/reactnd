import {Component} from "react";
import {connect} from "react-redux";
import {Container, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import VotingItem from "./VotingItem";

class VotingItems extends Component {


    render() {
        const {ids, answered} = this.props;

        return (
            <Container>
                <Row>
                    {ids.map((id) => {
                        return (
                            <VotingItem
                                key={id}
                                id={id}
                                answered={answered}
                            ></VotingItem>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({questions, users}) {
    return {
        questions,
        users,
    }
}

export default withRouter(connect(mapStateToProps)(VotingItems));