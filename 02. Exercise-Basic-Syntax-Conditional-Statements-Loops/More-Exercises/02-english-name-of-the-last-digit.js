function englishNameOfLastDigit(num){

    let lastDigit = num % 10;
    let writtenLastDigit = '';
    switch(lastDigit)
    {
        case 0: writtenLastDigit = 'zero'; break;
        case 1: writtenLastDigit = 'one'; break;
        case 2: writtenLastDigit = 'two'; break;
        case 3: writtenLastDigit = 'three'; break;
        case 4: writtenLastDigit = 'four'; break;
        case 5: writtenLastDigit = 'five'; break;
        case 6: writtenLastDigit = 'six'; break;
        case 7: writtenLastDigit = 'seven'; break;
        case 8: writtenLastDigit = 'eight'; break;
        case 9: writtenLastDigit = 'nine'; break;
        default: break;
    }
    console.log(writtenLastDigit);
}
englishNameOfLastDigit(512);