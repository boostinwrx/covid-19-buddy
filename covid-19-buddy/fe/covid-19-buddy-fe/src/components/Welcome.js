import React from "react";
import {connect} from "react-redux";
import {CardTitle, MDBAlert, MDBCardBody, MDBCardHeader, MDBCardTitle} from "mdbreact";
import {Card} from "mdbreact";
import {clearMessage, userLoginFetch} from "../actions/user";
import {axiosGetEntries} from "../actions/entry";
export default class Welcome extends React.Component{

componentDidMount() {
    // this.props.axiosGetEntries()
}

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

const mapDispatchToProps = (dispatch) => {
    return {
        axiosGetEntries: (entries) => {
            dispatch(axiosGetEntries(entries))
        }

    };
}


connect(mapDispatchToProps)(Welcome)