/*
There wa a test in your class and you passed it. But, you're ambitous person. You want to know if you're better than the average student in your class.

You receive an array with your peer's test scores. Now calculate the average and compare your score.

Return True if you're better, else False!*/

function betterThanAverage(classPoints, yourPoint) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    let average = sum;
    average = sum / classPoints.length;

    if (yourPoint > average) {
        return true;
    } else {
        return false;
    }
}

console.log(betterThanAverage([26, 46, 97, 43, 23], 65));