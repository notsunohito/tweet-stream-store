import React from 'react';

export default
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="header">
                <p>Header</p>
                <button onClick={this.props.onClickTopButton}>Top</button>
                <button onClick={this.props.onClickAboutButton}>About</button>
            </div>
        );
    }
}
