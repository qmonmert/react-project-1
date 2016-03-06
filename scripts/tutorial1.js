var CommentBoxInitial = React.createClass({
  render: function() {
    return (
      <div className="commentBoxInitial">
        Hello, world! I am a CommentBox initial.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBoxInitial />,
  document.getElementById('commentBoxInitialId')
);
