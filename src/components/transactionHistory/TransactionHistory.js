import React from "react";
import { Item } from "./Item.js";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

export function TransactionHistory({ transactions }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableTop}>
        <tr>
          <th className={styles.tableTitle}>Type</th>
          <th className={styles.tableTitle}>Amount</th>
          <th className={styles.tableTitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tableList}>
        {transactions.map((transaction) => {
          return <Item key={transaction.id} transaction={transaction} />;
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propType = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
