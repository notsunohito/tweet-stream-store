import React from 'react';

export default
class Top extends React.Component{
    render(){
        return (
            <div>
                <h1>This is Top Page!</h1>
                <button onClick={this.handleClickAdd.bind(this)}>Add</button>
                <Greetings data={this.props.data} />
            </div>
        );
    }

    handleClickAdd() {
        this.props.actions.fetchHelloWorld();
    }
}

class Greetings extends React.Component{
    render() {
        const greetings = this.props.data.greetings.map((greeting)=> {
            return <li>{ greeting }</li>;
        });
        return (
            <ul>
                { greetings }
            </ul>
        );
    }
}
