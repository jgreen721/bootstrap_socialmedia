import React from "react";
import {
  FaThumbsDown,
  FaThumbsUp,
  FaSadCry,
  FaComment,
  FaExclamation,
  FaHeart,
} from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const Posts = () => {
  const { posts, user, delete_post, addlike, adddislike } = useAuth();
  console.log(posts);

  const handleDelete = (post) => {
    console.log("handle Delete fired!", post);
    if (post.user.uid !== user?.uid) {
      console.log("dont have delete permission!");
    } else {
      console.log("delete away!");
      delete_post(post);
    }
  };

  const handleAddLike = (id, likes) => {
    console.log("addLike fired!");
    likes++;
    addlike(id, likes);
  };

  const handleDisLike = (id, dislikes = 0) => {
    console.log("addDisLike fired!");
    dislikes++;
    adddislike(id, dislikes);
  };
  return (
    <div className="posts-parent-container">
      {/* <h1>Posts</h1> */}
      <div className="posts-container">
        {posts.length &&
          posts.map((p) => (
            <div key={p.id} className="p-3 my-5 post-card">
              <div className="post-top d-flex justify-content-between">
                <div className="d-flex">
                  <img className="post-img" src={p.user.photoURL} alt="img" />
                  <div className="ms-4">
                    <p className="m-0">
                      <strong>{p.user.displayName}</strong>
                    </p>
                    <p>{p.user.email}</p>
                  </div>
                </div>
                <div>
                  {p.user.uid === user?.uid && (
                    <p onClick={() => handleDelete(p)} className="delete">
                      X
                    </p>
                  )}
                </div>
              </div>
              <h4 className="p-3">{p?.message}</h4>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <p className="me-2">
                    {new Date(p.createdAt?.seconds * 1000).toLocaleDateString()}
                  </p>
                  <p className="ms-2">
                    {new Date(p.createdAt?.seconds * 1000).toLocaleTimeString()}
                  </p>
                </div>
                <span className="mb-3">
                  <FaHeart style={{ color: "red" }} className="me-3" />
                  <strong> {p.likes}</strong>
                </span>
                <span className="mb-3">
                  <FaSadCry className="me-3 text-warning" />
                  <strong> {p?.dislikes ? p.dislikes : 0}</strong>
                </span>
              </div>
              <div className="d-flex bg-dark p-2 justify-content-start align-items-center">
                <button className="btn btn-success mx-3">
                  <FaThumbsUp onClick={() => handleAddLike(p.id, p.likes)} />
                </button>
                <button className="btn btn-warning text-light mx-3">
                  <FaThumbsDown
                    onClick={() => handleDisLike(p.id, p?.dislikes)}
                  />
                </button>
                <button className="btn btn-info text-light mx-3 disabled">
                  <FaComment />
                </button>
                <button className="btn btn-danger text-light mx-3 disabled">
                  <FaExclamation />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
