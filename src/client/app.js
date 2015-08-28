import React from 'react';
import Router from './models/router';
import Header from './components/header';
import Page from './components/page';
import Footer from './components/footer';

export default
class App extends React.Component{
    constructor(props) {
        super(props);
        this.router = new Router(this.onChangePageName.bind(this));
    }
    render() {
        return (
            <div>
                <Header onClickTopButton={this.onClickTopButton.bind(this)} onClickAboutButton={this.onClickAboutButton.bind(this)} />
                <Page pageName={this.state.pageName}/>
                <Footer />
            </div>
        );
    }
    componentWillMount() {
        this.router.start();
    }
    onClickTopButton() {
        this.router.show('top');
    }
    onClickAboutButton() {
        this.router.show('about');
    }
    onChangePageName(pageName){
        this.setState({pageName: pageName});
    }
}
