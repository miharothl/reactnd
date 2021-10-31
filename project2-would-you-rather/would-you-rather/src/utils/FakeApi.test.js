import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./FakeApi";


describe('FakeApi', () => {
  it('first test', () => {
    expect(true).toEqual(true)
  })
  it('getUsers should return users', async () => {
    const users = await _getUsers();
    expect(Object.keys(users).length > 0).toEqual(true)
  })
  it('getQuestions should return questionsReducers', async () => {
    const questions = await _getQuestions();
    expect(Object.keys(questions).length > 0).toEqual(true)
  })
  it('saveQuestion should save questionsReducers', async () => {
    const questions = await _getQuestions();
    const numQuestions = Object.keys(questions).length
    expect(numQuestions > 0).toEqual(true)

    const question = {
      optionOneText: 'blue pill',
      optionTwoText: 'red pill',
      author: 'johndoe' }

    const response = await _saveQuestion(question);

    expect(response.id).toBeDefined();
    expect(response.timestamp).toBeDefined();
    expect(response.author).toEqual(question.author);
    expect(response.optionOne.text).toEqual(question.optionOneText)
    expect(response.optionTwo.text).toEqual(question.optionTwoText)

    const questions2 = await _getQuestions();
    expect(Object.keys(questions2).length).toEqual(numQuestions + 1)
  })
  it('saveQuestionAnswers should save answers', async () => {
    const questions = await _getQuestions();

    const userId = 'johndoe';
    const questionId =  '8xf0y6ziyjabvozdd253nd';
    const question = questions[questionId];

    expect(question.optionOne.votes.length).toEqual(1);

    const answer = {
      authedUser: userId,
      qid: questionId,
      answer: 'optionOne' }

    await _saveQuestionAnswer(answer);

    const questions2 = await _getQuestions();

    expect(questions2[questionId].optionOne.votes.length).toEqual(2);
  })
})