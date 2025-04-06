export function calculateAccountBalance(creditList, debitList) {
  const totalCredits = creditList.reduce((acc, v) => acc + v.amount, 0);
  const totalDebits = debitList.reduce((acc, v) => acc + v.amount, 0);
  return totalCredits - totalDebits;
}

export function roundToHundredths(num) {
  return Math.round(num * 100) / 100;
}

function padZeroOnLeft(str, length) {
  return "0".repeat(Math.max(0, length - str.length)) + str;
}

export function formatDateStr(dateStr) {
  const date = new Date(dateStr);
  const year = padZeroOnLeft(date.getUTCFullYear().toString(), 4);
  const month = padZeroOnLeft(date.getUTCMonth().toString(), 2);
  const day = padZeroOnLeft(date.getUTCDate().toString(), 2);
  return `${year}-${month}-${day}`;
}
