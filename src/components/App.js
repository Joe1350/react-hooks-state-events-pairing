import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video";
import TitleInfo from "./TitleInfo";
import Buttons from "./Buttons";
import Comments from "./Comments"


// iframe can be a video component
// views need state... theoretically. because it will change, but we're not changing it, so not needed here
// upvote, downvote, and hide comment need state

function App() {
  const [upvote, setupvote] = useState(video.upvotes)
  const [downvote, setDownVote] = useState(video.downvotes)
  const [comments, setComments] = useState(true)

  const commentsList = video.comments.map(comment => (
    <div
      key={comment.id}
      className={comments ? "shown": "hidden"}
    >
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
    </div>
  ))

  function handleUpvoteClick() {
    setupvote(upvote + 1)
  }

  function handleDownvoteClick() {
    setDownVote(downvote + 1)
  }

  function handleToggleComments() {
    setComments(comments => !comments)
  }

  return (
    <div className="App">
      <Video embedUrl={video.embedUrl}/>
      <TitleInfo
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
      />
      <Buttons
        upvote={upvote}
        downvote={downvote}
        comments={comments}
        onUpvoteClick={handleUpvoteClick}
        onDownvoteClick={handleDownvoteClick}
        onToggleComments={handleToggleComments}
      />
      <Comments
        numberOfComments={video.comments.length}
        commentsList={commentsList}
      />
    </div>
  );
}

export default App;
