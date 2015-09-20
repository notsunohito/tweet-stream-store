import React from 'react';

export default
class Header extends React.Component{
    render(){
        return (
            <div id="header">
                <p>Header</p>
                <button onClick={this.handleClickTop.bind(this)}>Top</button>
                <button onClick={this.handleClickAbout.bind(this)}>About</button>
                <button onClick={this.handleClickStream.bind(this)}>Stream</button>
            </div>
        );
    }
    handleClickTop() {
        this.props.showPage('top');
    }
    handleClickAbout() {
        this.props.showPage('about');
    }
    handleClickStream() {
        this.props.showPage('stream');
    }
}
