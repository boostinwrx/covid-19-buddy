import React from "react";
import {connect} from "react-redux";
import {CardTitle, MDBAlert, MDBCardBody, MDBCardHeader, MDBCardTitle} from "mdbreact";
import {Card} from "mdbreact";
export default class Welcome extends React.Component{
    // state = { users: []
    //     // username: '',
    //     //    password: ''
    // }
// componentDidMount() {
//
// }

    render() {
        return(
            <div id='home main-container'>
                <Card id='home-card'>
                  <MDBAlert>Login Successful</MDBAlert>
                </Card>
                {/*<button onClick={() => this.state.getUsers()}>Get Users</button>*/}
                


            </div>

    )}
}
//




connect()(Welcome)