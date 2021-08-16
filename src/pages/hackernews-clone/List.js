function List({ number, title, points, hours, author, comments }) {
  return (
    <div className="list-body">
      <div>
        {number}
        {title}
      </div>
      <div className="list-second-row">
        {points} points by {author} {hours} hours ago | hide | {comments}{" "}
        comments
      </div>
    </div>
  );
}

export default List;
