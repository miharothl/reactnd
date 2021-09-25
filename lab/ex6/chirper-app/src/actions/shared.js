import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveTwets} from '../actions/tweets'
import {setAuthedUser} form '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  
  
  return (dispatch) => {
    return getInitialData()
      .then(({users, tweets}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTwets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
