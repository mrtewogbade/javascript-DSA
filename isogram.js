function isogram(str)
{
    // Convert the string in lower case letters
    str = str.toLowerCase();
    let len = str.length;

    let arr = str.split('');

    arr.sort();
    for (let i = 0; i < len - 1; i++) {
        if (arr[i] == arr[i + 1])
            return false;
    }
    return true;
}

console.log(isogram('Programmer')); // False
console.log(isogram('mutable')); // True
