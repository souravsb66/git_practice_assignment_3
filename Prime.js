let num = 27;
let count = 1;

for(let i = 0; i < num; i++) {
    if(num % i == 0) {
        count++;
    }
}

if(count == 2) {
    console.log("Not Prime");
} else {
    console.log("Prime");
}