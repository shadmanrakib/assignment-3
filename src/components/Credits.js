/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import { formatDateStr, roundToHundredths } from "../utils";
import styles from "./Credits.module.css";

const Credits = ({ credits }) => {
  return (
    <div>
      <h1>Credits</h1>
      <br />
      <div className={styles.creditList}>
        {credits.map((credit) => (
          <div id={credit.id} className={styles.creditItem}>
            <p>ID: {credit.id}</p>
            <p className={styles.creditAmount}>
              ${roundToHundredths(credit.amount)}
            </p>
            <p>Description: {credit.description}</p>
            <p>Date: {formatDateStr(credit.date)}</p>
          </div>
        ))}
      </div>
      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Credits;
