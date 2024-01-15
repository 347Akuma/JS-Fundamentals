function solve(n){

    let sum = 0;
    let currNum = 1;
for (let i = 1; i <= n; i ++) {
        console.log(currNum);
        sum += currNum;
        currNum += 2;
    
}
console.log(`Sum: ${sum}`);
}
solve(3);