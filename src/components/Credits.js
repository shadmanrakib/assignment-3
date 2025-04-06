/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import { formatDateStr, roundToHundredths } from "../utils";

const Credits = ({ credits }) => {
  return (
    <div>
      <h1>Credits</h1>
      <br />
      {credits.map((credit) => (
        <div id={credit.id}>
          <p>ID: {credit.id}</p>
          <p>Amount: {roundToHundredths(credit.amount)}</p>
          <p>Description: {credit.description}</p>
          <p>Date: {formatDateStr(credit.date)}</p>
        </div>
      ))}
      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Credits;
