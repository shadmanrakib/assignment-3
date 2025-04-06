import React, { useMemo, useState } from "react";

const AddCreditForm = (props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const disableButton = useMemo(
    () => amount <= 0 || description.trim() === "",
    [amount, description]
  );

  const onSubmit = () => {
    props.addCredit({ amount, description });
    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <p>Add Credit</p>

      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number.parseFloat(e.target.value))}
        />
      </div>

      <button type="button" onClick={onSubmit} disabled={disableButton}>
        Add Credit
      </button>
    </div>
  );
};

export default AddCreditForm;
