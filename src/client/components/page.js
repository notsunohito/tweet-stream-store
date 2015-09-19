import React from 'react';
import _ from 'lodash';
import Index from './pages/index';


export default
class Page extends React.Component {

    render(){
        const pageName = this.props.pages.pageName;
        return (
            React.createElement('div', {id: 'page'},
                React.createElement(this.findPage(pageName), this.createPageProps(pageName))
            )
        );
    }

    findPage(pageName) {
        return _.find(Index.PageClasses, (PageClass)=> PageClass.name.toLowerCase() === pageName);
    }

    createPageProps(pageName) {
        if(pageName === 'top') {
            return {
                tops: this.props.tops,
                fetchHelloWorld: this.props.topActions.fetchHelloWorld
            };
        };
        return null;
    }
}
