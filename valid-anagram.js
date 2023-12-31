// Input: (s = "anagram"), (t = "nagaram"); ---->>> Output: true;
// Input: (s = "rat"), (t, = "car"); ------>>>> Output: false;

const isAnagram1 = function(s, t){
    // s = s.split("").sort().join("");
    s = s.split('').sort().join('')

    
    
    return s === t;
}


//Optomized version

const isAnagram = function(s, t){
    if(s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
        
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(isAnagram("anagram", "aganram")); // true
console.log(isAnagram("anagram", "graman")); // false
