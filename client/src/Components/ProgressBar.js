import React from 'react';
import { Progress } from 'semantic-ui-react';

class ProgressBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { signatures : this.props.signatures }
    }

    render(){
        let signatures = this.state.signatures;
        return(
            <div>

            <Progress percent={(signatures / 500) * 100} color='blue'/>

            </div>
        )
    }
}

export default ProgressBar;