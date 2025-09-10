// src/components/CommentItem.jsx
import PropTypes from "prop-types";

function CommentItem({ email, comment }) {
  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
      <p className="text-sm text-gray-600">
        <strong>{email}</strong>
      </p>
      <p className="text-sm text-gray-800">{comment}</p>
    </div>
  );
}

CommentItem.propTypes = {
  email: PropTypes.string,
  comment: PropTypes.string,
};

export default CommentItem;
