import React, {useState, useEffect} from 'react';

class Score extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {() => {
                    if(this.props.score == null){
                        return <div>{this.props.error}</div>
                    }else{
                        return <div>{this.props.score}</div>
                    }
                }}
            </div>
        )
    }
}

export default Score;