import React from "react";

const UserCard = ({ user }) => {
  const numOne = (Math.random() * 200) | 0;
  const numTwo = (Math.random() * 200) | 0;
  const numThree = (Math.random() * 200) | 0;
  return (
    <div className="user-card">
      <div className="user-card-hero">
        <img
          className="user-hero-img"
          src="./assets/landscape/landscape2.jpeg"
          alt=""
        />
      </div>
      <div className="user-card-user-info text-center p-2">
        <img
          className="rounded-circle border-3 border-light border"
          src={user.photoURL}
          alt="user-img"
        />
        <h4 className="m-0">{user.displayName}</h4>
        <p className="m-0 opacity-50">
          <strong>Coding/Web-development</strong>
        </p>
        {/* <p>
          "Don't let me find a <em>vector</em> to{" "}
          <span className="text-danger">escalate</span> privileges...😈"
        </p> */}
        <strong>Hello World \n 😎</strong>
      </div>
      <div className="user-stats-row p-3">
        <div className="stat-col border-col text-center">
          <strong>{numOne}</strong>
          <p>Posts</p>
        </div>
        <div className="stat-col border-col text-center">
          <strong>{numTwo}</strong>
          <p>Followers</p>
        </div>
        <div className="stat-col text-center">
          <strong>{numThree}</strong>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
