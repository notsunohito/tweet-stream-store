import React from 'react';
import _ from 'lodash';
import Index from './pages/index';


export default
class Page extends React.Component{
    constructor(props){
        super(props);
    }
    findPage(pageName){
        return _.find(Index.PageClasses, (PageClass)=> PageClass.name.toLowerCase() === pageName);
    }
    render(){
        return (
            React.createElement('div', {id: 'page'},
                React.createElement(this.findPage(this.props.pageName), null)
            )
        );
    }
}
