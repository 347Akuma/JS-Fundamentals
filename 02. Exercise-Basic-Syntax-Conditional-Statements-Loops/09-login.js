function login(input) {

    const username = input[0];
    const correctPassword = username.split('').reverse().join('');
    let attempts = 0;

    for (let i = 1; i < input.length; i++) {

        const currPassword = input[i];

        if (currPassword != correctPassword) {
            if (attempts == 3) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
            console.log(`Incorrect password. Try again.`);
            attempts++;
            }
        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}
login(['Acer','login','go','let me in','recA']);