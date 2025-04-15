/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import AddDebitForm from "./AddDebitForm";
import { formatDateStr, roundToHundredths } from "../utils";
import styles from "./Debits.module.css";

const Debits = ({ debits, addDebit, accountBalance }) => {
  return (
    <div>
      <h1>Debits</h1>
      <div>
        <h3>Account Balance: ${roundToHundredths(accountBalance)}</h3>  
      </div>

      <div className={styles.debitList}>
        {debits.map((debit) => (
          <div key={debit.id} id={debit.id} className={styles.debitItem}>
            <p className={styles.debitAmount}>
              ${roundToHundredths(debit.amount)}
            </p>
            <p>Description: {debit.description}</p>
            <p>Date: {formatDateStr(debit.date)}</p>
          </div>
        ))}
      </div>
      <br />
      <AddDebitForm addDebit={addDebit} />
      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Debits;
