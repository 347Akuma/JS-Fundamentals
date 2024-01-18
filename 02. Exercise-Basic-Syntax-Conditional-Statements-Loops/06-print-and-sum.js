function solve(start, end){
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}
solve(0, 26);