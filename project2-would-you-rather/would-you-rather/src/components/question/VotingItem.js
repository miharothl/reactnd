import React, {Component} from "react";
import {connect} from "react-redux";
import PollMarketing from "./PollCard";

class VotingItem extends Component {

    render() {
        const {id, answered} = this.props;

        return (
            <PollMarketing key={id} id={id} answered={answered}></PollMarketing>
        )

    }
}

function mapStateToProps({questions, users}) {

    return {
        questions,
        users,
    };
}

export default connect(mapStateToProps)(VotingItem);