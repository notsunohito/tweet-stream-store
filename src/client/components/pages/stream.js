import React from 'react';

export default
class Stream extends React.Component {
    render(){
        return (
            <div>
                <ControlPanel data={this.props.data} actions={this.props.actions} />
                <Tweets data={this.props.data} />
            </div>
        );
    }
}


class ControlPanel extends React.Component {
    render() {
        return (
            <div className='control-panel'>
                { this.createTrackingCaption() }
                <input type='text' value={this.props.data.keyword} onChange={this.handleChangeKeyword.bind(this)} />
                <button onClick={this.handleClickTrack.bind(this)}>Track</button>
                <button onClick={this.handleClickClose.bind(this)}>Close</button>
            </div>
        );
    }
    createTrackingCaption() {
        if(this.props.data.tracking) return  <p>Tracking `{ this.props.data.tracking }`...</p>;
        return <p>Closed</p>;
    }
    handleChangeKeyword(event) {
        const keyword = event.target.value;
        this.props.actions.changeKeyword(keyword);
    }
    handleClickTrack() {
        const track = this.props.data.keyword;
        if(!track) return;
        this.props.actions.openTweetStore({ track: track });
    }
    handleClickClose() {
        this.props.actions.closeTweetStore();
    }
}


class Tweets extends React.Component {
    render() {
        const tweets = this.props.data.tweets;
        return (
            <ul>
                { tweets.map((tweet)=> <Tweet tweet={tweet} />) }
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
                <div dangerouslySetInnerHTML={ this.attachATag( tweet.text ) }></div>
            </li>
        );
    }
    attachATag(text) {
        const aTagged = text.replace(/https?:\/\/\S+/g,function(match) {
            return '<a href="'+ match +'" target="_blank">'+ match +'</a>';
        });
        return { __html: aTagged};
    }
}
