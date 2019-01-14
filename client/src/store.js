import { createStore, combineReducers } from 'redux'

import inviteReducer from './reducers/inviteReducer'
// import all reducers here

const rootReducer = combineReducers({
  inviteReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store