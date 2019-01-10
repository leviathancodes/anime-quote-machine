import React from 'react';
import { ReactComponent as TweetIcon } from './images/twitter.svg';

const Tweet = props => {
    return (
        <a href={"https://twitter.com/intent/tweet?text=" + '"' + props.quote + '"' + " \n " + " - " + props.author} id="tweet-quote" >
        <div className={`tweet-${props.class} tweet-button`}>
        <TweetIcon />
        </div>
        </a>
    );
};

export default Tweet;