
import { combineReducers } from 'redux'
import manageUsers from './userReducer'

const rootReducer = combineReducers({
    users: manageUsers
    // entries: manageEntries
});

export default rootReducer;