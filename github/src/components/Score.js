import React, {useState, useEffect} from 'react';

class Score extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const msg = () => {
            if(this.props.error !== null){
                return <h2>{this.props.error}</h2>
            }else if(this.props.score !== null){
                return <h2>Your Score is: {this.props.score}!</h2>
            }else{
                return <h2></h2>
            }
        }
        return(
            <div>
                {msg()}
            </div>
        )
    }
}

export default Score;