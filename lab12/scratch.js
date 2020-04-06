const generateCoinChange = cents => {
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    let remainingChange = cents;
    
    const getNumberOfCoins = (coinValue) => {
      let numberOfCoins = Math.floor(remainingChange/coinValue);
      remainingChange = remainingChange - (numberOfCoins * coinValue)
      
      return numberOfCoins
    };
    
    quarter = getNumberOfCoins(25);   
    dime = getNumberOfCoins(10);    
    nickel = getNumberOfCoins(5);    
    penny = getNumberOfCoins(1);
    
    console.log(`Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}`)
};
generateCoinChange(94);
generateCoinChange(100);
generateCoinChange(23);