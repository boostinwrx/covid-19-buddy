import {API_URL, GET_ENTRIES, SAVE_ENTRY} from "./actionTypes";
import axios from "axios";
import {authError, getUsers, loginSuccess, loginUser} from "./user";

export function saveEntry(newEntry) {
    return {type: SAVE_ENTRY, entry: newEntry}


}
export function getEntries(entries) {
    return { type: GET_ENTRIES, entries: entries }
}

export function axiosGetEntries(entries){
    return dispatch => {
        axios.get(`${API_URL}/entries`,{headers:               {  Authorization: window.localStorage.getItem('token')}
        })
            .then(response => {
                dispatch(getEntries(response.data))
            })
            .catch(e => console.log(e))
    }
}