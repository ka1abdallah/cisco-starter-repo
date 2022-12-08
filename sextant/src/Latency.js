import React from 'react';
const socket=new WebSocket('ws://localhost:55455');

class Latency extends React.Component{  
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }
    componentDidMount(){ 
    
        socket.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
            })
        };
    }

    render() {
        return (
            <div >
                {this.state.latency}
            </div>
        );
    }
}

export default Latency;


