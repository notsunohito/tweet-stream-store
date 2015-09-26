import React from 'react';
import _ from 'lodash';
import Index from './pages/index';


export default
class Page extends React.Component {

    render(){
        const { pageName } = this.props.data;
        return (
            React.createElement('div', {id: 'page'},
                React.createElement(this.findPage(pageName), this.createPageProps())
            )
        );
    }

    findPage(pageName) {
        return _.find(Index, (PageComponent)=> PageComponent.name.toLowerCase() === pageName);
    }

    createPageProps() {
        return {
            data: this.props.data,
            actions: this.props.actions
        };
    }
}
