import React from "react";
// import { FaCircle, FaLike } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const Posts = () => {
  const { posts, user, delete_post } = useAuth();
  console.log(posts);

  const handleDelete = (post) => {
    console.log("handle Delete fired!");
    if (post.user.id !== user.id) {
      console.log("dont have delete permission!");
    } else {
      console.log("delete away!");
      delete_post(post);
    }
  };
  return (
    <div className="posts-parent-container">
      {/* <h1>Posts</h1> */}
      <div className="posts-container">
        {posts.length &&
          posts.map((p) => (
            <div key={p.id} className="p-3 my-2">
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
                  {/* <h1 className="ellipse"> */}
                  <p onClick={handleDelete} className="delete">
                    X
                  </p>
                  {/* </h1> */}
                </div>
              </div>
              <h4 className="p-3">{p?.message}</h4>
              <div className="d-flex align-items-center justify-content-between">
                <p>
                  {new Date(p.createdAt?.seconds * 1000).toLocaleTimeString()}
                </p>
                <p>
                  {new Date(p.createdAt?.seconds * 1000).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
