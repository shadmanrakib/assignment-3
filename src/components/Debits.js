/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Debits = (props) => {
  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return (
        <li key={debit.id}>
          ${debit.amount.toFixed(2)} {debit.description} {date}
        </li>
      );
    });
  }
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>
      <h3>Account Balance: ${props.accountBalance.toFixed(2)}</h3>

      {debitsView()}

      <form onSubmit={props.addDebit}>
        <label htmlFor="description"> Description</label>
        <input type="text" name="description" />

        <label htmlFor="amount"> Amount</label>
        <input type="number" name="amount" />

        <button type="submit">Add Debit</button>
      </form>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;