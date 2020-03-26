var reviews = [5, 5, 4.5, 1, 3];
// iterating
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
// computing avg
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
var average = total / reviews.length;
console.log("the average is " + average);
// simplified for loop syntax
var sportsOne = ['golf', 'cricket', 'tennis', 'soccer'];
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
// conditionals in loops
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSport = sportsOne_2[_a];
    if (tempSport === 'soccer') {
        console.log('my fav! ' + tempSport);
    }
}
// arrays in typescript are always growable aka always dynamic
sportsOne.push('football');
console.log(sportsOne);
