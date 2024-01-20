function amazingNumbers(num){

    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++){
        sum += Number(num[i]); //parse current string number to an actual integer
    }

    let res = sum.toString().includes('9');
    console.log(res ?
        `${num} Amazing? True` :
        `${num} Amazing? False`);
}
amazingNumbers(1233);