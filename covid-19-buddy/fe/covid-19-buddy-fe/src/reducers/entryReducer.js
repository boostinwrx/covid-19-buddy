import {

} from "../actions/actionTypes";
import {GET_ENTRIES} from "../actions/actionTypes";
import {ADD_ENTRY} from "../actions/actionTypes";
import {SAVE_ENTRY} from "../actions/actionTypes";


export default function manageEntries(state = {
    entries: [],
    error: '',
    success: '',
    newEntry: '',

}, action){
    switch (action.type) {
        case SAVE_ENTRY:
            return {...state, entry: action.newEntry}
        case GET_ENTRIES:
            return {...state, entries: action.entries}
        case ADD_ENTRY:

            return {...state, entries: [...state.entries, action.newEntry]}
        default:
            return state
    }
};
