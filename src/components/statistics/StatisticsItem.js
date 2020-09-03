import React from "react";
import styles from "./StatisticsItem.module.css";

export function StatisticsItem({ statistic }) {
  return (
    <li className={styles.item} style={getRandomColor()}>
      <span className={styles.label}>{statistic.label}</span>
      <span className={styles.percentage}>{statistic.percentage}</span>
    </li>
  );
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return {
    backgroundColor: "#" + r.toString(16) + g.toString(16) + b.toString(16),
  };
}
