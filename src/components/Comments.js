import React from "react";

function Comments({
    numberOfComments,
    commentsList,
}) {
    return (
        <div id="comments">
            <h2>{numberOfComments} Comments</h2>
            {commentsList}
        </div>
    )
}

export default Comments;