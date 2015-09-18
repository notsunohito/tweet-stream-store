import React, { Component, PropTypes } from 'react';
import * as PageActions from '../actions/pages';
import * as TopActions from '../actions/tops';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import router from '../router';
import Header from '../components/header';
import Page from '../components/page';
import Footer from '../components/footer';


export default
class App extends Component{

    constructor(props) {
        super(props);
        this.pageActions = bindActionCreators(PageActions, this.props.dispatch);
        this.topActions = bindActionCreators(TopActions, this.props.dispatch);
    }

    render() {

        const { pages, tops } = this.props;

        return (
            <div>
                <Header showPage={this.showPage.bind(this)} />
                <Page pages={pages} tops={tops} topActions={this.topActions} />
                <Footer />
            </div>
        );
    }

    componentWillMount() {
        router.setURLChangedHandler(this.pageActions.showPage);
        router.start();
    }

    showPage(pageName) {
        router.show(pageName);
    }
}

App.propTypes = {
    pages: PropTypes.object.isRequired,
    tops: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        pages: state.pages,
        tops: state.tops
    };
}

export default connect(mapStateToProps)(App);
