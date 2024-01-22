function spiceMustFlow(sourceStartingYield){

    let availableYield = sourceStartingYield;
    let dailySpice = 0;
    let daysPassed = 0;
    let totalSpice = 0;
    
    while (availableYield >= 100){
        dailySpice = 0;
        daysPassed++;
        if (daysPassed === 1){ // first extract is the starting yield
            dailySpice += availableYield; 
            dailySpice >= 26? dailySpice -= 26: dailySpice -= dailySpice;
            availableYield -= 10;
        } else { // extract daily spice
            dailySpice += availableYield;
            dailySpice >= 26? dailySpice -= 26: dailySpice -= dailySpice;
            availableYield -= 10;
        }    
        totalSpice += dailySpice; 
    }
    totalSpice >= 26? totalSpice -= 26: totalSpice = 0;

    console.log(daysPassed);
    console.log(totalSpice);

    //>=100 yield - profitable
    //<100 yield - abandon
    //minin crew - 26 everyday end of shift + 26 after mine is exhausted (if storage contains that much)

    //to print: how many days passed, total spice extracted
}
spiceMustFlow(450);