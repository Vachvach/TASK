const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
	const bl = cartItemsPrices.reduce((num1, num2) => {
		return +num1 + +num2;
	  })
	  if(Math.floor(Number(bl) * 100) / 100 === WINNING_SUM) {
		  return true;
	  }
	  return false; 
  
}

module.exports = doesCartWinPrize;
