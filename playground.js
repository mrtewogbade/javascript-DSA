// function createUser (name){
//     const discordName = "@" + name;

//     let reputation = 0;
//     const getReputation = () => reputation;
//     const giveReputation = () => reputation ++;


//     return { name, discordName, getReputation, giveReputation }
// }

// const josh = createUser('josh');
// josh.giveReputation();
// josh.giveReputation();
// josh.giveReputation();
// josh.giveReputation();

// console.log({discordName: josh.discordName,
// reputation: josh.getReputation()});


// function createPlayer (name , level) {
//     const { discordName, getReputation } = createUser(name);

//     const increaseLevel = () => level++;
//     return { name, discordName, getReputation, increaseLevel }
// }


// FACTORY FUNCTIONS



const createPlayer = function (name, level){

    console.log('Received parameters:', name, level);


    const user = createUser(name)
    console.log('User object created:', user);

    const increaseLevel = () => level++;
    console.log('Level increased to:', level);

    console.log('Creating player object with increasedLevel method');

    return Object.assign({}, user, { increaseLevel})
}

const createUser = function(name){
    return {name}
}

const player = createPlayer('John Doe', 5);

console.log('Final player object:', player);

const Formatter = (function() {

    console.log("Start");

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);


    const makeUppercase = (text) => {
        log(`Making ${text} uppercase'`);
        return text.toUpperCase();
    }

    return {
        makeUppercase
    }
})();

console.log(Formatter.makeUppercase("tomek"));

// Formatter.log("Hello")


const Formatter1 = (function(){
    let timesRun = 0;

    const log = message => console.log(`[${Date.now}] Logger: ${message}`);
    const setTimesRun = () => {
        log("Setting times run")

        ++timesRun;
    }

    const makeUppercase = (text) => {
        log(`Making ${text} uppercase'`);
        setTimesRun();
        return text.toUpperCase();

    };

    return {
        makeUppercase,
        timesRun,
    }
})()


console.log(Formatter1.makeUppercase("tomek"));
console.log(Formatter1.timesRun);

Formatter1.timesRun = 10;
console.log(Formatter1.timesRun);