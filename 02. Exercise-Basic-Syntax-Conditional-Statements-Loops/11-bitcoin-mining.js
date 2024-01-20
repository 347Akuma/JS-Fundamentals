function bitcoinMining(input) {

    const singleBitcoinPrice = 11949.16;
    const oneGramOfGold = 67.51;

    let bitcoinOwned = 0;
    let moneyOwned = 0;

    let days = 0;
    let firstPurchaseDay = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        days++;

        let dailyGold = input[i];
        if (days % 3 === 0) {
            dailyGold *= 0.70;
        }

        moneyOwned = moneyOwned + (dailyGold * oneGramOfGold);

        while (moneyOwned >= singleBitcoinPrice) {
            moneyOwned -= singleBitcoinPrice;
            bitcoinOwned++;

            if (bitcoinOwned === 1) {
                firstPurchaseDay = firstPurchaseDay + days;
            }
        }
    }
    if (bitcoinOwned > 0) {
        console.log(`Bought bitcoins: ${bitcoinOwned}`);
        console.log(`Day of the first purchased bitcoin: ${firstPurchaseDay}`);
        console.log(`Left money: ${moneyOwned.toFixed(2)} lv.`);
    }
    else {
        console.log(`Bought bitcoins: ${bitcoinOwned}`);
        console.log(`Left money: ${moneyOwned.toFixed(2)} lv.`);
    }
}
bitcoinMining([3124.15,
    504.212,
    2511.124]);