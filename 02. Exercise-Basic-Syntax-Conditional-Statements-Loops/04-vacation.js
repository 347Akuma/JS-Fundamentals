function solve(groupSize, groupType, dayOfWeek){

    let price;
    switch(groupType){
        case 'Students':
            if (dayOfWeek === 'Friday'){
                price = 8.45 * groupSize;
            } else if (dayOfWeek === 'Saturday'){
                price = 9.80 * groupSize;
            } else if (dayOfWeek === 'Sunday'){
                price = 10.46 * groupSize;
            }
            if (groupSize >= 30){
                price *= 0.85;
            }
        break;
        case 'Business':
            if (groupSize >= 100) {
                groupSize -= 10;
            }
            if (dayOfWeek === 'Friday'){
                price = 10.90 * groupSize;
            } else if (dayOfWeek === 'Saturday'){
                price = 15.60 * groupSize;
            } else if (dayOfWeek === 'Sunday'){
                price = 16.00 * groupSize;
            }
        break;
        case 'Regular':
            if (dayOfWeek === 'Friday'){
                price = 15.00 * groupSize;
            } else if (dayOfWeek === 'Saturday'){
                price = 20.00 * groupSize;
            } else if (dayOfWeek === 'Sunday'){
                price = 22.50 * groupSize;
            }
            if (groupSize >= 10 && groupSize <= 20){
                price *= 0.95;
            }
        break;
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}
solve(30, 'Students', 'Sunday');