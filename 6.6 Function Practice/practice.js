// Problem #1
function minTosSec(min){
  var sec = min * 60;
  return sec;

}

console.log(minTosSec(600));
console.log(ageInSeconds(81));
console.log(bBallScore(600,600));
console.log(footballScore(1, 1, 1));
console.log(countLegs(5, 2, 7));


// Problem #5
function ageInSeconds(years){
  var age = years * 31536000;
  return age;
}

// Problem #8
function bBallScore(pointer, pointers){
  var score2 = pointer * 2; 
  var score3 = pointers * 3;
  return score2 + score3;
}

//Problem #9
function footballScore(touchdowns, extrapoint, fieldgoals){
  var touchdown = touchdowns * 6;
  var extraPoint = extrapoint * 1;
  var fieldgoal = fieldgoals * 3;
  return touchdown + extraPoint + fieldgoal;
}

// Problem #10
function countLegs(chickens, cows, pigs){
  var chickenlegs = chickens * 2;
  var cowlegs = cows * 4; 
  var pigslegs = pigs * 4;
  return chickenlegs + cowlegs + pigslegs;
}

// Problem #
