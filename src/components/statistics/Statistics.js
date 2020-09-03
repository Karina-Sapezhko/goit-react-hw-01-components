import React from "react";
import PropTypes from "prop-types";
import { StatisticsItem } from "./StatisticsItem";
import { StatisticsTitle } from "./StatisticsTitle";
import styles from "./Statistics.module.css";

export function Statistics({ statistics }) {
  return (
    <section className={styles.statistics}>
      <StatisticsTitle title="Upload stats" />

      <ul className={styles.statList}>
        {statistics.map((statistic) => (
          <StatisticsItem key={statistic.id} statistic={statistic} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propType = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
