import React, { useState, useEffect } from "react";

const FollowCard = () => {
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      if (!localStorage["follow-candidates"]) {
        let response = await fetch("https://randomuser.me/api?results=8");
        let data = await response.json();
        console.log(data);
        data = data.results;
        localStorage.setItem("follow-candidates", JSON.stringify(data));
      } else {
        // console.log("some folks down in LS");
        setFollowers(
          JSON.parse(localStorage.getItem("follow-candidates")).slice(0, 4)
        );
        // console.log(followers);
      }
    }

    fetchUsers();
  }, []);
  return (
    <div className="follow-card p-3">
      <h4 className="bold-h4">Who to Follow</h4>
      {followers.map((f) => (
        <div
          className="p-2 d-flex align-items-center justify-content-between follower-item"
          key={f.phone}
        >
          <img className="follower-img" src={f.picture.large} alt="img" />
          <div className="ms-3">
            <p className="m-0">
              <strong>
                {f.name.first} {f.name.last}
              </strong>
            </p>
            <p
              className="email-p opacity-50 text-primary"
              data-email={`${f.email}`}
            >{`${f.email.slice(0, 8)}...`}</p>
          </div>
          <button className="add-btn">
            <h1>+</h1>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FollowCard;
