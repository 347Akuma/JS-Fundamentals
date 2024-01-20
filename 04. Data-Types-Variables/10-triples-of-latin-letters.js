function triplesOfLatinLetters(n){

    const startCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
          const char1 = String.fromCharCode(startCharCode + i);
          const char2 = String.fromCharCode(startCharCode + j);
          const char3 = String.fromCharCode(startCharCode + k);
  
          const triple = char1 + char2 + char3;
          console.log(triple);
        }
      }
    }
}
triplesOfLatinLetters('3');