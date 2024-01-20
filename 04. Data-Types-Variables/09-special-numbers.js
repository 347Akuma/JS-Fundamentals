function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let temp = i;
        let sum = 0;

        while (temp != 0) {
            let currentDigit = temp % 10;
            sum += currentDigit;
            temp = Math.floor(temp / 10);
        }
        sum === 5 || sum === 7 || sum === 11 ?
            console.log(`${i} -> True`) :
            console.log(`${i} -> False`);
    }
}
specialNumbers(15);