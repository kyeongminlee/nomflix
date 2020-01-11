import React from "react";
import "./Header.css";

export default () => (
  <header className="nav">
    <ul>
      <li>
        <a href="/">Movies</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="/tv">TV</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);
