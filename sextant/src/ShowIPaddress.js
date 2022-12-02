import React from 'react';
class ShowIPaddress extends React.Component {
    constructor(n) {
        super();
        this.state = {
            url: n.url,
            ipAddress: null,
            
        };
    }
   componentDidMount()
   {  fetch(this.state.url)
    .then(response=>{if(!response.ok) {throw new Error()} else return response.json() })
    .then(data=>{if(this.state.url=='https://api64.ipify.org?format=json')
    {if(data.ip.includes(":")==false){this.setState({ipAddress:"Not Detected"})}
    else this.setState({ipAddress:data.ip})}
     else this.setState({ipAddress:data.ip})   
    })
    .catch(err=>{this.setState({ipAddress:err.message})})
   
   }
    render() { 
        return (
            <div>{this.state.ipAddress}</div> 
        );
    }
}
export default ShowIPaddress;
