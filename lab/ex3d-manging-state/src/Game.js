import React, {Component} from "react";


// const value1 = Math.floor(Math.random() * 100);
// const value2 = Math.floor(Math.random() * 100);
// const value3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;


class Game extends Component {
    constructor(props) {
        super(props);

        const valuesArray = this.makeNewQuestion();

        this.state = {
            value1: valuesArray[0],
            value2: valuesArray[1],
            value3: valuesArray[2],
            proposedAnswer: valuesArray[3],
        }
    }

    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

        return [value1, value2, value3, proposedAnswer]
    };

    handleAnswer = (event) => {
        const newValuesArray = this.makeNewQuestion();
        this.updateState(newValuesArray);
        const answerWasCorrect = this.evaluateAnswer(event.target.name);
        this.props.handleAnswer(answerWasCorrect);
    }

    updateState = (newValuesArray) => {
        this.setState(currentState => ({
            value1: newValuesArray[0],
            value2: newValuesArray[1],
            value3: newValuesArray[2],
            proposedAnswer: newValuesArray[3],
            })
        )

    }

    evaluateAnswer = (givenAnswer) => {
        const {value1, value2, value3, proposedAnswer} = this.state;
        const correctAnswer = value1 + value2 + value3;

        if ((proposedAnswer === correctAnswer && givenAnswer === 'true' ) ||
            (proposedAnswer !== correctAnswer && givenAnswer === 'false'))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    render() {

        const {value1, value2, value3, proposedAnswer} = this.state;

        return (
            <div className="game">
                <h2>Mental Math</h2>
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                </div>
                <button onClick={this.handleAnswer} name="true">True</button>
                <button onClick={this.handleAnswer} name="false">False</button>
            </div>
        )
    }
}

export default Game;