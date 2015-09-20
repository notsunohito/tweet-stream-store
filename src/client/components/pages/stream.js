import React from 'react';

export default
class Stream extends React.Component{
    render(){
        return (
            <div>
                <h1>This is Stream Page!</h1>
                <Tweets data={this.props.data} />
            </div>
        );
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
