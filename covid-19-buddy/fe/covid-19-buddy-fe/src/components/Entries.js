
import React from 'react';
import Entry from "./Entry";

const Entries = props => {
    const entries = props.entries.map(entry => <Entry key={entry.id} {...entry} />)

    return (
        <div>
            {entries}
        </div>
    );

};

export default Entries;