import React, { useState, useEffect } from "react";

const Stories = () => {
  const [stories, setStories] = useState([]);
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
        setStories(
          JSON.parse(localStorage.getItem("follow-candidates")).slice(4, 8)
        );
        // console.log(followers);
      }
    }

    fetchUsers();
  }, []);
  return (
    <div className="story-card p-3 overflow-hidden">
      <h4 className="bold-h4">Who to Follow</h4>
      <div className="container">
        <div className="d-flex">
          {stories.map((f) => (
            <div className="p-2 story-item" key={f.phone}>
              <img className="story-img" src={f.picture.large} alt="img" />
              {/* <div className="ms-3"> */}
              <p className="story-name text-light">
                <strong>
                  {f.name.first.length + f.name.last.length < 16
                    ? `${f.name.first}
              ${f.name.last}`
                    : `${f.name.first} ${f.name.last.split("").shift()[0]}.`}
                </strong>
              </p>
              {/* <p
              className="email-p opacity-50 text-primary"
              data-email={`${f.email}`}
            >{`${f.email.slice(0, 8)}...`}</p> */}
              {/* </div> */}
              {/* <button className="add-btn">
            <h1>+</h1>
          </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
