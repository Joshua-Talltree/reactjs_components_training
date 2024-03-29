import React from 'react';

const CommentDetail = props => {
    return (
        <div className="ui container comment">
            <div className="comment">
                <a href="/">
                    <img alt="avatar" src={props.avatar}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;