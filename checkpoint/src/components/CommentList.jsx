import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-center mb-4">Comentários:</h2>
      <div className="space-y-4">
        {comments.map((item) => (
          <CommentItem key={item.id} email={item.email} comment={item.comment} />
        ))}
      </div>
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
