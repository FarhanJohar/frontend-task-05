import React from "react";
import { Link } from "react-router-dom"; // Use Link for routing

const FetchDataNavigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">API Data</Link>
      </li>
      <li>
        <Link to="/to-do">To-Do List</Link>
      </li>
    </ul>
  </nav>
);

export default FetchDataNavigation;
