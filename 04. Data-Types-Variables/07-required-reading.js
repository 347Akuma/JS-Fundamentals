function requiredreading(currBookPages, pagesPerHour, daysToReadBook){

    let timeToReadBook = currBookPages / pagesPerHour;
    let hoursPerDay = timeToReadBook / daysToReadBook;

    console.log(hoursPerDay);
}
requiredreading(212, 20, 2);