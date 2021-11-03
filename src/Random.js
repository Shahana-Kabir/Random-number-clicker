import React, {Component} from 'react';


class Random extends React.Component {
    constructor(props){
        super(props);
        this.state = {num: 1};
        this.genRandom = this.genRandom.bind(this);
        
    }
    
genRandom(){
    let rand = Math.floor(Math.random()*10);
    this.setState({num: rand});
}
    
    render(){
        return(
            <div>
                <h1>
                    Number is: {this.state.num}
                </h1>
                {this.state.num === 7 && <h2>You win!</h2>}
                {this.state.num !== 7 && <button onClick = {this.genRandom}>
                    random number
                </button>}
                
               
            </div>
        )
    }
}

export default Random;