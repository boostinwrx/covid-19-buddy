import React, {Component} from "react";
import {Route, NavLink, Link,Switch, BrowserRouter as Router} from "react-router-dom";
import {MDBNavbar, MDBNavItem, MDBNavLink} from "mdbreact";
import {Button} from "react-bootstrap";
import {NavbarBrand, NavDropdown} from "react-bootstrap";
import connect from "react-redux/lib/connect/connect";
import {clearMessage, userLoginFetch} from "../actions/user";
export default class NavBar extends Component {
    state = {
        token: null
    }
    componentDidMount() {
        this.tokenTest()
    }
    tokenTest(){
        const  token = localStorage.getItem('token')
        {token ? this.setState({token: true}) :  this.setState({token: false})}
    }

    render(){
        const login = () => {  return(              <MDBNavLink to="/login" className='badge-pill btn-outline-mdb-color'><div className='nav-link font-weight-bold white-text'>Login</div></MDBNavLink>
        )}

        const logOut = () => {  return(              <a>                <MDBNavLink to="/newentry"  className='badge-pill btn-outline-mdb-color btn-green'><div className='nav-link font-weight-bold white-text'>New Entry</div></MDBNavLink><Button onClick={localStorage.removeItem('token') && this.props.history.push('/loginrequired')} className='btn-toolbar bg-transparent badge-pill'><div className='nav-link font-weight-bold black-text'>Log Out</div></Button></a>
        )}


        return(
            <MDBNavbar id='navbar' className='navbar bg-primary'>

                <NavbarBrand>
                    COVID-19 Buddy

                </NavbarBrand>

                <MDBNavLink to="/" className='badge-pill btn-outline-mdb-color'><div className='nav-link font-weight-bold white-text'>Home</div></MDBNavLink>
                <MDBNavLink to="/createaccount" className='badge-pill btn-outline-mdb-color'><div className='nav-link font-weight-bold white-text'>Create Account</div></MDBNavLink>
                { login()  }
                <MDBNavLink to="/entries" className='badge-pill btn-outline-mdb-color'><div className='nav-link font-weight-bold white-text'>My Entries</div></MDBNavLink>

                {/*<NavLink to='/myprofile'><Button className='btn btn-default'><div className='nav-link'>My Profile </div>  </NavLink>*/}
                {this.state.token ? logOut() : ''}

            </MDBNavbar>



        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.users.authenticated
    }
}


connect (mapStateToProps)(NavBar)