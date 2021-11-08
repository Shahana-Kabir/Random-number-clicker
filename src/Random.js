import React, {Component} from 'react';


class Random extends React.Component {
    constructor(props){
        super(props);
        this.state = {score: 0};
       
    }
    
    tripleKill = ()=> {
        this.setState({score: this.state.score + 1});

        this.setState({score: this.state.score + 1});
  
        
    };
    
                        
    render(){
        return(
            <div>
                <h1>
                    {this.state.score}
                </h1>
                 <button onClick = {this.tripleKill}>
                    Triple kill
                </button>                               
            </div>
        )
    }
}

export default Random;