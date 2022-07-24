import React from "react";
import {
  FaHome,
  FaUsers,
  FaGlobe,
  FaCalendar,
  FaComments,
  FaBell,
} from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

var links = [
  { id: 1, color: "green", icon: <FaHome />, name: "Feed" },
  { id: 2, color: "blue", icon: <FaUsers />, name: "Connections" },
  { id: 3, color: "green", icon: <FaGlobe />, name: "Latest News" },
  { id: 4, color: "red", icon: <FaCalendar />, name: "Events" },
  { id: 5, color: "lightgray", icon: <FaComments />, name: "Groups" },
  { id: 6, color: "orange", icon: <FaBell />, name: "Notifications" },
  { id: 7, color: "gray", icon: <BsGearFill />, name: "Settings" },
];

const LinksCard = () => {
  return (
    <ul className="linkcard">
      {links.map((l) => (
        <li key={l.id} className="d-flex  m-2 link-item">
          <span style={{ color: l.color }}>{l.icon}</span>
          <strong>{l.name}</strong>
        </li>
      ))}
    </ul>
  );
};

export default LinksCard;
