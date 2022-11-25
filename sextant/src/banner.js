import React from 'react';
import './Banner.css';

class Banner extends React.Component {
    render() {
        return (
            <div className="Banner">
                <h1>{this.props.bannertext}</h1>
            </div>
        );
    }
}
export default Banner;
