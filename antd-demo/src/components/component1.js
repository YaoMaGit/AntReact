import React from 'react';
import  './component1.less';


class page extends React.Component {
    constructor(props){
        super(props);
        this.state = { data: this.props.listData};
    }
    render() {
        return (
            
            <div>
                Component1
                <div className="divCss">{this.props.listData}</div>
            </div>
        )
    }
}

export default page

