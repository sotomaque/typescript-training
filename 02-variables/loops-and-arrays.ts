let reviews: number[] = [5, 5, 4.5, 1, 3];

// iterating
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}

// computing avg
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
let  average: number = total / reviews.length;
console.log(`the average is ${average}`);

// simplified for loop syntax
let sportsOne: string[] = ['golf', 'cricket', 'tennis', 'soccer'];

for (let tempSport of sportsOne) {
    console.log(tempSport);
}


// conditionals in loops
for (let tempSport of sportsOne) {
    if (tempSport === 'soccer') {
        console.log('my fav! ' + tempSport)
    }
}

// arrays in typescript are always growable aka always dynamic
sportsOne.push('football');
console.log(sportsOne);