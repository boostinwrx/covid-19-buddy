import React, {Component} from "react";
import {axiosGetEntries} from "../actions/entry";
import {connect} from "react-redux";
import Entries from "../components/Entries";

class EntriesContainer extends Component {

    UNSAFE_componentWillMount() {
        // mapDispatchToProps()
        this.props.dispatch(axiosGetEntries())

    }
    render() {
        return (
            <div>
                <Entries entries={this.props.entries}/>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return{entries: state.entries.entries}
}


const mapDispatchToProps = (dispatch) => {
    return {
        axiosGetEntries: (entries) => {
            dispatch(axiosGetEntries(entries))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer)