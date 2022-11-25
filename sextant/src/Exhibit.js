import React from 'react'
import './Exhibit.css';

class Exhibit extends React.Component {
    render() {
        return (
            <div className="Exhibit">
                <h2 className="ExhibitHeader">{this.props.name}</h2>
                <div className="ExhibitChild">{this.props.children}
                </div>
            </div>
        );
    }
}
export default Exhibit;
