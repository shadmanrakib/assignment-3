/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import AddCreditForm from "./AddCreditForm";
import { formatDateStr, roundToHundredths } from "../utils";
import styles from "./Credits.module.css";

const Credits = ({ credits, addCredit }) => {
  return (
    <div>
      <h1>Credits</h1>
      <br />
      <div className={styles.creditList}>
        {credits.map((credit) => (
          <div key={credit.id} id={credit.id} className={styles.creditItem}>
            <p className={styles.creditAmount}>
              ${roundToHundredths(credit.amount)}
            </p>
            <p>Description: {credit.description}</p>
            <p>Date: {formatDateStr(credit.date)}</p>
          </div>
        ))}
      </div>
      <br />
      <AddCreditForm addCredit={addCredit} />
      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Credits;
