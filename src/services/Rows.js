function rows(loan, nper, rate) {
  let principal = "";
  if (loan && nper && rate !== "") {
    principal = loan / nper;
  }

  let rows = [
    { period: 0, payment: 0, interest: 0, principal: 0, balance: loan },
  ];
  if (loan && nper && rate !== "") {
    for (let period = 1; period <= nper; period++) {
      rows.push({
        period: period,
        payment: principal + (loan - (loan / nper) * (period - 1)) * rate / 100,
        interest: (loan - (loan / nper) * (period - 1)) * rate / 100,
        principal: principal,
        balance: loan - (loan / nper) * period,
      });
    }
  }
  return rows;
}

export default rows;
