import React from 'react';
import Banner from './banner';
import Exhibit from './Exhibit';
import './App.css';
import ShowIPaddress from './ShowIPaddress';
class App extends React.Component {
    render() {
        return (
            <div className="App">
               <Banner bannertext="Sextant react app"/>
               <Exhibit name="Your Public IPv4 Address">
                    <ShowIPaddress url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Your Public IPv6 Address" >
                    <ShowIPaddress url='https://api64.ipify.org?format=json'/>
                </Exhibit>
                 
            </div>
        );
    }
}
export default App;
