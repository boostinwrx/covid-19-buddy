import React from "react";

export default class Entry extends React.Component {
    render() {
        return(
            <div>
                {console.log(this.props.entry)}
            </div>
        )
    }

}