
import { combineReducers } from 'redux'
import manageUsers from './userReducer'
import manageEntries from "./entryReducer";

const rootReducer = combineReducers({
    users: manageUsers,
    entries: manageEntries
    // entries: manageEntries
});

export default rootReducer;