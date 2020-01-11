import React from "react";
import styles from "./Header.module.css";

export default () => (
  <header>
    <ul className={styles.navList}>
      <li>
        <a href="/">Movies</a>
      </li>
    </ul>
    <ul className={styles.navList}>
      <li>
        <a href="/tv">TV</a>
      </li>
    </ul>
    <ul className={styles.navList}>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);
