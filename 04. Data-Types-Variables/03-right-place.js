function rightPlace(str1, ch, str2) {

    let replacement = str1.replace('_', ch);

    let output = (replacement === str2? "Matched": "Not Matched");
    console.log(output);
}
rightPlace('Str_ng', 'i', 'String');