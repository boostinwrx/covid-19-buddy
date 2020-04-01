import React from 'react';
import logo from './logo.svg';
import './App.css';
import createHistory from "history/createBrowserHistory";
import requireAuth from "./components/hoc/RequireAuth";
import noRequireAuth from "./components/hoc/NoRequireAuth";
import {connect} from "react-redux";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {axiosGetUsers} from "./actions/user";
import {MDBCardHeader, MDBCardTitle} from "mdbreact";


class App extends React.Component {
    componentDidMount() {
        // this.props.isLoggedIn()
    this.props.axiosGetUsers()

    }

    render() {
        return (

            <div className="App">
                <MDBCardTitle><h1>Welcome to COVID-19 buddy!</h1></MDBCardTitle>
            </div>


        );
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        axiosGetUsers: (users) => {
            dispatch(axiosGetUsers(users))
        }
    }
}


export default connect(null, mapDispatchToProps)(App)
