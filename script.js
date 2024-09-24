console.log(`\nStep 2: If -else Condition`)

let number = 0;

if (number > 0) {
    console.log(`Number ${number} is positive`)
}

else if (number < 0) {
    console.log(`Number ${number} is negative`)
}

else {
    console.log(`Number ${number} is zero`)
}

console.log(`\nStep 3: Switch Statement`)

let day = 3;

switch (day) {
    case 1:
        console.log(`Day 1 is Sunday`)
        break;
    case 2:
        console.log(`Day 2 is Monday`)
        break;
    case 3:
        console.log(`Day 3 is Tuesday`)
        break;
    case 4:
        console.log(`Day 4 is Wednesday`)
        break;
    case 5:
        console.log(`Day 5 is Thursday`)
        break;
    case 6:
        console.log(`Day 6 is Friday`)
        break;
    case 7:
        console.log(`Day 7 is Saturday`)
        break;
}

console.log(`\nStep 4: Loops (For, While, Do...While)`)
console.log(`\nLoop "For"`)
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

let i = 1;
console.log(`\nLoop "While"`)
while (i <= 5) {
    console.log(i)
    i++
}

console.log(`\nLoop "Do...While"`)
let j = 1;

do {
    console.log(j); j++
} while (j <= 5);

console.log(`\nStep 5: Control Flow with break and continue)`)

console.log(`\nBreak`)
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}
console.log(`Loop exited at i = 6`);

console.log(`\nContinue`);

var scores = [45, 89, 34, 56, 98, 81, 69];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 60) {
        continue;
    }
    console.log("Student " + (i + 1) + " is passing with grade " + scores[i]);
}

console.log(`\nStep 6: Scope and Context`)

let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(`globalVar with value ${globalVar} is accessible inside function`);
    console.log(`localVar with value ${localVar} is accessible inside function`);
}

scopeExample.call();

console.log(`globalVar with value ${globalVar} is accessible outside function`);
//  console.log(`localVar with value ${localVar} is not accessible outside function`); - local variable, declared in function, doesn't work outside function