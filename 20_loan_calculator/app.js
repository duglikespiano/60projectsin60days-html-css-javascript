const calculateLoan = () => {
	const loanAmountValue = document.querySelector('.loan-amount').value;
	const interestRateValue = document.querySelector('.interest-rate').value;
	const monthToPayValue = document.querySelector('.months-to-pay').value;
	const interest = (loanAmountValue * (interestRateValue * 0.01)) / monthToPayValue;
	const monthlyPayment = (loanAmountValue / monthToPayValue + interest).toFixed(2);
	document.querySelector('.monthly-payment').innerText = `Monthly Payment: ${monthlyPayment}`;
};

calculateLoan();
