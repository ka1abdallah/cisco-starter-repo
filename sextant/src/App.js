import React from 'react';
import Banner from './banner';
import Exhibit from './Exhibit';
import './App.css';
class App extends React.Component {
    render() {
        return (
            <div className="App">
               <Banner bannertext="Sextant react app"/>
                <Exhibit name="Just an exhibit:)" children="content"></Exhibit>
                 
            </div>
        );
    }
}
export default App;
