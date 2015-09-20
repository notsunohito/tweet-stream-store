import React from 'react';

export default
class Stream extends React.Component{
    render(){
        return (
            <div>
                { this.createTrackingCaption() }
                <input type='text' value='instagram' />
                <button onClick={this.handleClickTrack.bind(this)}>Track</button>
                <button onClick={this.handleClickClose.bind(this)}>Close</button>
                <Tweets data={this.props.data} />
            </div>
        );
    }

    createTrackingCaption() {
        if(this.props.data.tracking) return  <p>Tracking `{ this.props.data.tracking }`...</p>;
        return <p>Closed</p>;
    }

    handleClickTrack() {
        this.props.actions.openTweetStore({ track: 'instagram' });
    }
    handleClickClose() {
        this.props.actions.closeTweetStore();
    }
}

class Tweets extends React.Component{
    render() {
        const tweets = this.props.data.tweets.map((tweet)=> {
            return <Tweet tweet={tweet} />;
        });
        return (
            <ul>
                { tweets }
            </ul>
        );
    }
}

class Tweet extends React.Component {
    render() {
        const tweet = this.props.tweet;
        return(
            <li>
                <a href={ 'https://twitter.com/'+ tweet.user.screen_name } target='_blank'>
                    <img src={ tweet.user.profile_image_url } />
                </a>
                <div>{ tweet.user.name }</div>
                <div>{ tweet.text }</div>
            </li>
        );
    }
}
