import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import LoadingBar from 'react-redux-loading-bar';
import {handleInitialData} from './appActions';
import Navigator from "../components/navigator/Navigator";
import Leaderboard from "../components/leaderboard/Leaderboard";
import Dashboard from "../components/questions/Dashboard";
import New from "../components/questions/New";
import Question from "../components/questions/Question";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <>
                    <LoadingBar/>
                    <div>
                        <Navigator/>
                        {
                            this.props.loading === true
                                ? null
                                : (
                                    <div>
                                        <Route path="/" exact component={Dashboard}/>
                                        <Route path="/leaderboard" component={Leaderboard}/>
                                        <Route path="/questions/:id" component={Question}/>
                                        <Route path="/new" component={New}/>
                                    </div>
                                )
                        }
                    </div>
                </>
            </Router>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null,
    };
}

export default connect(mapStateToProps)(App);
