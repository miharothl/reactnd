import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {handleInitialData} from './appActions';
import Navigator from "../components/navigator/Navigator";
import Leaderboard from "../components/leaderboard/Leaderboard";
import Dashboard from "../components/question/Home";
import New from "../components/question/New";
import PollItem from "../components/question/PollItem";
import Login from "../components/user/Login";
import NotFoundError from "../components/error/NotFoundError";
import ErrorBoundary from "../components/error/ErrorBoundary";
import LoadingBar from "react-redux-loading-bar";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {authedUser} = this.props;

        return (

            <ErrorBoundary>
                <Router>
                    <LoadingBar/>
                    {this.props.loading === true ? null
                        : (
                            <>
                                {authedUser === null ? (
                                        <>
                                            <div>
                                                <Navigator/>
                                                <Login/>
                                            </div>
                                        </>
                                    )
                                    : (
                                        <>
                                            <Navigator/>
                                            <Switch>
                                                <Route path="/" exact component={Dashboard}/>
                                                <Route path="/leaderboard" component={Leaderboard}/>
                                                <Route path="/questions/:id" component={PollItem}/>
                                                <Route path="/new" component={New}/>
                                                <Route path="/errorNotFound" component={NotFoundError}/>
                                                <Route component={NotFoundError}/>
                                            </Switch>
                                        </>
                                    )}
                            </>
                        )
                    }
                </Router>
            </ErrorBoundary>
        );
    }
}

function mapStateToProps({authedUser, questions, users}) {
    return {
        authedUser,
        loading:
            (Object.keys(questions).length === 0 ||
                Object.keys(users).length === 0) &&
            authedUser === null
    };
}

export default connect(mapStateToProps)(App);
