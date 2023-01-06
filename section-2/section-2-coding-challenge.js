// Coding challenge #1

// TEST DATA 1:
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// TEST DATA 2:
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////

// Coding challenge #2

// TEST DATA 1:
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// TEST DATA 2:
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(`Mark's BMI = ${BMIMark} \nJohn's BMI = ${BMIJohn}`);
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI  is higher than John's BMI`);
// } else {
//   console.log(`John's BMI is higher than Marks's BMI!`);
// }

////////////////////

// Coding challenge #3

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(`Dolphins score = ${scoreDolphins} \nKoalas score = ${scoreKoalas}`);
// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Dolphins and Koalas draw');
// }

// Bonus
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(`Dolphins score = ${scoreDolphins} \nKoalas score = ${scoreKoalas}`);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Dolphins and Koalas draw');
// } else {
//   console.log('No one wins');
// }

////////////////////

// Coding challenge #4

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill} \nThe tip was ${tip} \nAnd the total was ${bill + tip}`);