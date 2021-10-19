/////////////////////////////////////////////////
// Algorithm
// By: Virgilio D. Cabading Jr.
// Date:
/////////////////////////////////////////////////

// function d6() {
//     var roll = Math.random();
//     // your code here

//     roll = roll * 6;

//     console.log("roll original:", roll);

//     roll = Math.floor(roll);

//     roll++;

//     // console.log("new roll:", roll);

//     return roll;
// }
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "I think so",
    "better luck nexxt time"
];

var ran_num = Math.random();
ran_num= ran_num * lifesAnswers.length;
ran_num = Math.floor(ran_num);

console.log("random num is " + ran_num);
console.log("////////////////////////////////////////////////////")
console.log("Zoltar says " + lifesAnswers[ran_num]);