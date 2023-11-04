// Get all possible pairs out of provided letters.

// Example:
// letter = ['a', 'b']
// Output = ['aa', 'ab', 'ba', 'bb']

function pairs(letters) {
    const result = [];
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters.length; j++) {
          let concatt =  letters[i].concat(letters[j])
            result.push(concatt)
        }
        
    }
    return result;
}

console.log(pairs('doe'));