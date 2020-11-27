import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import meals from './meals'
import settings from './settings'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth,
    meals,
    settings
})

export default createRootReducer;