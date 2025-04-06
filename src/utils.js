export function calculateAccountBalance(creditList, debitList) {
  const totalCredits = creditList.reduce((acc, v) => acc + v.amount, 0);
  const totalDebits = debitList.reduce((acc, v) => acc + v.amount, 0);
  return totalCredits - totalDebits;
}

export function roundToHundredths(num) {
  return Math.round(num * 100) / 100;
}
