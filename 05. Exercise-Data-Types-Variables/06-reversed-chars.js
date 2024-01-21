function reversedChars(ch1, ch2, ch3){

    let arr = [ch1, ch2, ch3];
    arr.reverse((a, b) => a - b);
    console.log(arr.join(" "));
}
reversedChars('A', 'B', 'C')