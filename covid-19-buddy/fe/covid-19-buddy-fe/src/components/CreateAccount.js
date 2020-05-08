import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {userPostFetch} from '../actions/user'
import {FormGroup, FormText} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {AxiosInstance as axios} from "axios";
import {Button} from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css';
import {CardSubtitle} from "react-bootstrap/Card";
import {MDBCardHeader, MDBCardText, MDBCardTitle} from "mdbreact";

class CreateAccount extends React.Component{

    state = {
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        gender:  '',
        age: null,
        profileimg: '',
        bio: '',
        pronouns: ''
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });

    }



    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.userPostFetch(this.state)
        // this.props.dispatch({type: 'LOGIN', currentUser: {username: this.state.username, password: this.state.username}})    }
    }

    //wire up mapDispatchToProps

    render() {
        return(
            <div id='create-account main-container' className='modal-body'>
                <MDBCardTitle id='create-account header 'className='header'><h2>Create Account</h2></MDBCardTitle>
                <MDBCardText id='create-account sub-header 'className='red-text'><b className='red-text'>(  *  )</b>  Required field</MDBCardText>
                <br/>
                <Form id='create-account form'onSubmit={this.handleOnSubmit}>

                    <Form.Group id='create-account form-group username'onChange={this.handleInputChange} controlId="formBasicUsername">
                        <Form.Label id='create-account form-label username'>Username  <b className='red-text'>*</b></Form.Label>
                        <Form.Control id='username' type="text" placeholder="Create Username" />
                    </Form.Group>


                    <Form.Group id='create-account form-group password' onChange={this.handleInputChange} controlId="formBasicPassword">
                        <Form.Label id='create-account form-label password'>Password  <b className='red-text'>*</b></Form.Label>
                        <Form.Control id='password' type="password" placeholder="Create Password" />
                    </Form.Group>
                    <br/>
                    <br/>
                    <br/>
                    <FormText id='create-account form-text'><h5 id='create-account tell-us-about-yourself text'>Tell Us About Yourself!</h5></FormText>

                    <Form.Group id='create-account form-group firstname'onChange={this.handleInputChange} >
                        <Form.Label id='create-account form-label firstname'>Firstname  <b className='red-text'>*</b></Form.Label>
                        <Form.Control id='firstname' type="text" placeholder="Firstname" />
                    </Form.Group>

                    <Form.Group id='create-account form-group lastname'onChange={this.handleInputChange} >
                        <Form.Label id='create-account form-label lastname'>Lastname<b className='red-text'>*</b></Form.Label>
                        <Form.Control id='lastname' type="text" placeholder="Lastname" />
                    </Form.Group>

                    <Form.Group id='create-account form-group password' onChange={this.handleInputChange} controlId="formBasicPassword">
                        <Form.Label id='create-account form-label password'>Age  <b className='red-text'>*</b></Form.Label>
                        <Form.Control id='age' type="number" placeholder="How old are you?" />
                    </Form.Group>
                   <Form.Group id='create-account form-group pronouns' onChange={this.handleInputChange} controlId="formBasicPronouns">
                    <Form.Label id='create-account form-label pronouns'>Preferred Pronouns  <b className='red-text'>*</b></Form.Label>
                    <Form.Control id='pronouns' type="text" placeholder="What are your preferred pronouns?   (she/her, they/them, etc.)"  />
                </Form.Group>


                    <Form.Group id='create-account form-group gender' onChange={this.handleInputChange} controlId="formBasicPronouns">
                        <Form.Label id='create-account form-label gender'>Gender</Form.Label>
                        <Form.Control id='gender' type="text" placeholder=" (Optional) What is your gender identity, if any?"  />
                    </Form.Group>

                <Form.Group id='create-account form-group bio' onChange={this.handleInputChange} controlId="formBasicBio">
                        <Form.Label id='create-account form-label Bio'>Bio</Form.Label>
                        <Form.Control id='bio' type="text" placeholder="Tell Us About Yourself!" />
                    </Form.Group>

                    <Form.Group id='create-account form-group pic-url' onChange={this.handleInputChange} controlId="formBasicPicture">
                        <Form.Label id='create-account form-label pic-url'>Profile Picture</Form.Label>
                        <Form.Control id='profileimg' type="text" placeholder="Enter an image URL for your profile picture" />
                    </Form.Group>





<br/>
                    <Button id='create-account submit-btn' variant='primary' className='submitButton' type="submit"> Submit </Button>
                </Form>
            </div>


        )}

}

const mapDispatchToProps = (dispatch) => {
    return {
        userPostFetch: (userInfo) => {
            dispatch(userPostFetch(userInfo))
        }
    }
}

export default connect(null,mapDispatchToProps)(CreateAccount)