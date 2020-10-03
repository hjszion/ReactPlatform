import React from 'react';

const HOC = (WrappedComponent, WrapFunc) => {
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                data: WrapFunc()
            }
        }

        render(){
            const data = this.state.data;
            return(
                <WrappedComponent data={this.state.data} {...this.props} />
            )
        }
    }
}

export default HOC;