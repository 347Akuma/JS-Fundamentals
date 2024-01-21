function sortNumbers(num1, num2, num3){

    let nums = [num1, num2, num3];
    
    let sortedNums = nums.sort().reverse();

    console.log(sortedNums.join('\n'));
}
sortNumbers(2, 1, 3);