function echoType(input) {

    let myVar = typeof (input);

    if (myVar === 'string' || myVar === 'number') {
        console.log(`${myVar}\n${input}`);
    }
    else {
        console.log(typeof(input));
        console.log('Parameter is not suitable for printing');
    }
}
echoType('Hello, JavaScript!');