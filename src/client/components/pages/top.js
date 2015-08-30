import React from 'react';
import { Hello } from '../../models/hello';


export default
class Top extends React.Component{
    constructor(props) {
        super(props);
        this.state = { greetings: [] };
    }
    render() {
        return (
            <div>
                <h1>This is Top Page!</h1>
                <button onClick={this.onClickHelloButton.bind(this)}>Hello</button>
                <Greetings greetings={this.state.greetings} />
            </div>
        );
    }
    onClickHelloButton() {
        Hello.world().then((res)=> {
            this.setState({ greetings: this.state.greetings.concat(res.greeting) });
        });
    }
}

class Greetings extends React.Component{
    render() {
        let greetings = this.props.greetings.map((greeting)=> {
            return (<li>{ greeting }</li>);
        });
        return (
            <ul>
                { greetings }
            </ul>
        );
    }
}
