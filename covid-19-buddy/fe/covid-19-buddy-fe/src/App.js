import React from 'react';
import logo from './logo.svg';
import './App.css';
import createHistory from "history/createBrowserHistory";
import requireAuth from "./components/hoc/RequireAuth";
import noRequireAuth from "./components/hoc/NoRequireAuth";
import {connect} from "react-redux";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {axiosGetUsers} from "./actions/user";
import {MDBCard, MDBCardHeader, MDBCardTitle} from "mdbreact";
import {Card} from "react-bootstrap";
import CardHeader from "react-bootstrap/Card";

class App extends React.Component {
    componentDidMount() {
        // this.props.isLoggedIn()
    this.props.axiosGetUsers()

    }

    render() {
        return (

            <MDBCard className="App">
                <MDBCardTitle>Welcome to COVID-19 buddy!</MDBCardTitle>
            </MDBCard>


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
