function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    // every 2nd game - helmet breaks
    //every 3rd lost game - sword breaks
    // if helmet & sword are broken in the same lost fight - shield breaks
    // every 2nd shield break - his armor breaks

    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmor = 0;

    for (let i = 1; i <= lostFightsCount; i++) {

        if (i % 2 === 0) {
            brokenHelmets++;
            if (i % 3 === 0) {
                brokenSwords++;
                brokenShields++;
                if (brokenShields % 2 == 0) {
                    brokenArmor++;
                }
            }
        }
        else if (i % 3 === 0){
            brokenSwords++;
        }
    }

    let finalExpenses = (brokenHelmets * helmetPrice) + (brokenSwords * swordPrice) + (brokenShields * shieldPrice) + (brokenArmor * armorPrice);
    console.log(`Gladiator expenses: ${finalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )