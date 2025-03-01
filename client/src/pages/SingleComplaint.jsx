import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import {
  closeComplaint,
  getComplaint,
} from "../features/complaint/complaintSlice";
import Comment from "../components/Comment";
import { createComment, getComments } from "../features/comment/commentSlice";

const SingleComplaint = () => {
  const { user } = useSelector((state) => state.auth);
  const { singleComplaint, isLoading, isError, message } = useSelector(
    (state) => state.complaint
  );

  const { comments } = useSelector((state) => state.comment);

  const [text, setText] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseComplaint = (id) => {
    dispatch(closeComplaint(id));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(
      createComment({
        id: id,
        text: text,
      })
    );
    setText("");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    // Fetch Complaint
    dispatch(getComplaint(id));
    // Fetch Comments
    dispatch(getComments(id));

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message, id, user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen p-10">
      <BackButton url={"/complaints"} />
      <div className="my-2 relative p-5 border border-gray-400 flex items-center justify-between flex-col md:flex-row">
        <div
          className={
            singleComplaint.status === "open"
              ? "absolute top-3 right-3 bg-green-500 rounded-full text-center py-0.5 px-2 text-white font-bold"
              : singleComplaint.status === "pending"
              ? "absolute top-3 right-3 bg-gray-500 rounded-full text-center py-0.5 px-2 text-white font-bold"
              : "absolute top-3 right-3 bg-red-500 rounded-full text-center py-0.5 px-2 text-white font-bold"
          }
        >
          {singleComplaint?.status}
        </div>
        <div className="my-4 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold my-2 uppercase">
            Brand : {singleComplaint?.laptop}
          </h1>
          <p className="text-sm font-semibold text-gray-600 my-2">
            {singleComplaint?.description}
          </p>
          <p className="text-sm font-semibold text-gray-600 my-2">
            Date :{" "}
            {new Date(singleComplaint?.createdAt).toLocaleDateString("en-IN")}
          </p>
          <p className="text-sm font-semibold text-gray-600 my-2">
            Complaint Id : {singleComplaint._id}
          </p>
        </div>
        <div>
          <img className="h-72" src={singleComplaint?.image} alt="" />
        </div>
      </div>

      <div className="my-5 border border-gray-400 p-5">
        <form onSubmit={handleAddComment}>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Enter Comment"
            className="border border-gray-500 w-full p-2"
          />
          <button className="hover:cursor-pointer hover:bg-gray-800 duration-150 bg-black text-white font-semibold text-base py-2 px-2 w-full my-2">
            Add Comment
          </button>
        </form>

        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>

      <button
        onClick={() => handleCloseComplaint(id)}
        className="bg-red-400 my-2 py-2 px-4 w-full text-white font-bold hover:bg-red-600 duration-200 hover:cursor-pointer disabled:bg-gray-500"
        disabled={singleComplaint.status === "close"}
      >
        {singleComplaint.status === "close" ? "Closed" : "Close My Complaint"}
      </button>
    </div>
  );
};

export default SingleComplaint;
