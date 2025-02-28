import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="bg-gray-50 my-2 border border-gray-400 p-4">
      <h2 className="text-lg font-semibold">{comment.message}</h2>
      <p className="text-gray-400 text-sm ">
        {new Date(comment.createdAt).toLocaleDateString("en-IN")}
      </p>
    </div>
  );
};

export default Comment;
