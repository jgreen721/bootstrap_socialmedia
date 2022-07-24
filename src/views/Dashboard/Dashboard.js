import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Navbar,
  UserCard,
  LinksCard,
  FollowCard,
  QuotesCard,
  Stories,
  AddPost,
  Posts,
  WeatherCard,
} from "./components";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  });

  if (user?.displayName)
    return (
      <div className="full-view">
        <Navbar user={user} />
        <div className="main-content-container">
          <div className="column small-column">
            <UserCard user={user} />
            <LinksCard user={user} />
            <WeatherCard />
            <div className="text-center link-div p-2">
              <p className="text-primary">View Profile</p>
            </div>
          </div>
          <div className="column large-column">
            <Stories />
            <AddPost user={user} />
            <Posts />
          </div>
          <div className="column small-column">
            <FollowCard />
            <QuotesCard />
          </div>
        </div>
      </div>
    );
  return "";
};

export default Dashboard;
