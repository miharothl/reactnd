import React, {Component} from "react";
import {connect} from "react-redux";
import {formatDate, formatTweet} from "../utils/helpers";

import {TiArrowBackOutline} from "react-icons/all";
import {TiHeartOutline} from "react-icons/all";
import {TiHeartFullOutline} from "react-icons/all";

class Tweet extends Component {

  render() {
    // console.log(this.props)

    const tweet = this.props.tweet

    if (tweet === null) {
      return <p>This tweet doesn't exist.</p>
    }

    const {
      name, avatar, timestamp, text, hasLiked, likes, replies, id, parent
    } = tweet

    return (
      <div className='tweet'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button className='replying-to' onClick={(e) => this.toParent(e, parent)}>
                Replaying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon'/>
            <span>{replies !== 0 && replies}</span>
            <button className='heart-button' onClick={this.handleLike}>
              {hasLiked === true
                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon'/>
                : <TiHeartOutline className='tweet-icon'/>}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    )
  }

  toParent = (e, id) => {
    e.preventDefault()

    // todo: redirect to parent tweet
  }

  handleLike = () => {

  }
}


function mapStateToProps({authedUser, users, tweets}, {id}) {
  const tweet = tweets[id]

  const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }

}


export default connect(mapStateToProps)(Tweet)