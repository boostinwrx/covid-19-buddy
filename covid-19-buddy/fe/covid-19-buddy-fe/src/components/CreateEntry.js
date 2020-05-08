import React from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosGetEntries, axiosPostEntry, saveEntry} from '../actions/entry'
import {Form, ButtonGroup, FormCheck} from "react-bootstrap";
import {Button} from "mdbreact";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {API_URL} from "../actions/actionTypes";

class CreateEntry extends React.Component{
    // state = {
    //     location: []

// ON SELECTION SELECT => _suggestionSelect handl(result, lat, lon) handleLocationChange, setState with result, lat, lon
   // omSubmit, post meetup
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    // postMeetup = (newMeetup) => {
    //     axios.post(`${API_URL}meetups`, {newMeetup: newMeetup})
    //         .then(response => {
    //             this.props.addMeetup(response.data)
    //         })
    //         .catch(e => console.warn(e))
    // }
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.axiosPostEntry(this.state)
        this.props.saveEntry(this.state)
    }


    componentDidMount() {
     this.props.axiosGetEntries()
    }

    render(){
        return(

            //         <div class='card-body'>
            //             Location: {meetup.location}
            //             Time: {meetup.time}
            //             Date: {meetup.date}
            //             Category: {meetup.category}
            //             Info: {meetup.info}

            <div id='create-meetup main-container' className='modal-body'>
                <h2  id='create-meetup header 'className='header-raised'>Create A New Meetup</h2>
                <Form id='create-meetup form' onSubmit={this.handleOnSubmit}>

                    <Form.Group id='create-meetup form-group name'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label name'>Meetup Name</Form.Label>
                        <Form.Control id='name' type="text" placeholder="Meetup Name" />
                    </Form.Group>


                    <Form.Group id='create-meetup form-group location' controlId="formBasicUsername">
                        <Form.Label id='create-meetup form-label location'>Location</Form.Label>
                    </Form.Group>

                    <Form.Group id='create-meetup form-group time'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label time'>Time</Form.Label>
                        <Form.Control id='time' type="time" placeholder="Choose Time" />
                    </Form.Group>
                    <Form.Group id='create-meetup form-group date'onChange={this.handleInputChange}>
                    <Form.Label id='create-meetup form-label date'>Date</Form.Label>
                    <Form.Control id='date' type="date" placeholder="Choose Date" />
                </Form.Group>

                    <Form.Group id='create-meetup form-group info'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label category'>Event Category:</Form.Label>
                        <br/>

                        <Form.Check  inline label='Lesbian' type='radio' id='category' value='Lesbian'/>
                        <Form.Check  inline label='Gay' type='radio' id='category' value='Gay'/>
                        <Form.Check  inline label='Transgender/Genderqueer' type='radio' id='category' value='Transgender/Genderqueer'/>
                    </Form.Group>

                    <Form.Group id='create-meetup form-group info'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label info'>Meetup Info</Form.Label>
                        <Form.Control id='info' type="text" placeholder="Meetup Info" />
                    </Form.Group>

                    <Button id='create-meetup submit-btn' variant='primary' className='submitButton' action={this.handleOnSubmit} type="submit"> Submit </Button>

                </Form>
            </div>
        )
    }


}


const mapStateToProps = (state) => {
    return{
        newMeetup: state.newMeetup,
        categories: state.categories

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        axiosPostEntry: (newEntry) => {
            dispatch(axiosPostEntry(newEntry))
        },
        saveEntry: (newEntry) => {
            dispatch(saveEntry(newEntry))
        },
        axiosGetEntries: (entries) => {
            dispatch(axiosGetEntries(entries))

        }
     }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateEntry)