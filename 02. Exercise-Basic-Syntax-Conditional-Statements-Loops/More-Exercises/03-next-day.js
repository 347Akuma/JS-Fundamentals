function nextDay(year, month, day) {

    const currentDate = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() + 1);

    const nextYear = currentDate.getFullYear();
    const nextMonth = currentDate.getMonth() + 1;
    const nextDay = currentDate.getDate();

    console.log(`${nextYear}-${String(nextMonth)}-${String(nextDay)}`);
}
nextDay(2016, 9, 30);
//padStart(2, '0')

//.padStart(2, '0')