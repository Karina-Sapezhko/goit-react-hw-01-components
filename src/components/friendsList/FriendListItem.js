import React from "react";
import styles from "./FriendListItem.module.css";

function styleSpan(bool) {
  return bool ? styles.online : styles.notOnline;
}

export function FriendListItem({ friend }) {
  return (
    <li className={styles.item}>
      <span className={styleSpan(friend.isOnline)}></span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt="avatar"
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
}
