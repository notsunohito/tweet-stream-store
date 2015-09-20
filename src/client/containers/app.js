import React, { Component, PropTypes } from 'react';
import * as Actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import router from '../router';
import socketIO from '../socketIO';
import Header from '../components/header';
import Page from '../components/page';
import Footer from '../components/footer';


class App extends Component{

    constructor(props) {
        super(props);
        this.actions = bindActionCreators(Actions, this.props.dispatch);
        router.setURLChangedHandler(this.actions.showPage);
        router.start();
        socketIO.on('tweet', (tweet)=> this.actions.addTweet(tweet));
        socketIO.emit('track', { track: 'instagram' });
    }

    render() {
        return (
            <div>
                <Header showPage={this.showPage} />
                <Page data={this.props.data} actions={this.actions} />
                <Footer />
            </div>
        );
    }

    showPage(pageName) {
        router.show(pageName);
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        data: state.index
    };
}

export default connect(mapStateToProps)(App);
