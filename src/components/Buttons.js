import React from "react";

function Buttons({
    upvote,
    downvote,
    comments,
    onUpvoteClick,
    onDownvoteClick,
    onToggleComments,
}) {
    return (
        <div id="buttons">
            <div id="like-dislike-buttons">
                <button onClick={onUpvoteClick}>
                    {upvote} 👍
                </button>
                <button onClick={onDownvoteClick}>
                    {downvote} 👎
                </button>
            </div>
            <button
                onClick={onToggleComments}
            >
                {comments ? 'Hide Comments' : 'Show Comments'}
            </button>
        </div>
    )
}

export default Buttons;