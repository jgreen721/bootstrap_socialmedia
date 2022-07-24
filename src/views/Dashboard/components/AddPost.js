import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import {
  FaImage,
  FaVideo,
  FaNewspaper,
  FaBasketballBall,
} from "react-icons/fa";

const AddPost = ({ user }) => {
  const [message, setMessage] = useState("");
  const { addpost } = useAuth();
  //   console.log(user);

  const handleAddPost = () => {
    let messageObj = {
      message,
      user,
      likes: 0,
      comments: [],
    };
    console.log(messageObj);
    addpost(messageObj);
    setMessage("");
  };
  return (
    <div className="p-2 addpost-container">
      <div className="d-flex">
        <img className="post-user-img" src={user.photoURL} alt="img" />
        <textarea
          className="w-100 addpost-input pt-4 ps-5"
          placeholder="Share your thoughts..."
          name="post"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="button-row row">
        <div className="col-md-8">
          <button className="btn btn-danger m-2" disabled>
            <FaImage />
            <span> Photo</span>
          </button>
          <button className="btn btn-dark text-light m-2" disabled>
            <FaVideo />
            <span> Video</span>
          </button>
          <button className="btn btn-primary m-2" disabled>
            <FaNewspaper />
            <span> Events</span>
          </button>
          <button className="btn btn-warning m-2" disabled>
            <FaBasketballBall />
            <span> Feeling/Activity</span>
          </button>
        </div>
        <div className="col-md-2 offset-2">
          <button
            onClick={handleAddPost}
            className="btn btn-success m-2 addpost-btn"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
