import React from "react";
import PropTypes from "prop-types";

export function StatisticsTitle({ title }) {
  return title && <h2>{title}</h2>;
}

StatisticsTitle.defaultProps = {
  title: "",
};
StatisticsTitle.propType = {
  title: PropTypes.string,
};
