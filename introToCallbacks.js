class Clock {
    constructor() {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        setInterval(this._tick.bind(this), 1000);
        
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick() {
       this.seconds++;
       this.printTime();
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

//const clock = new Clock();

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum,numsLeft,completionCallback) {
    if (numsLeft > 0) {
        reader.question('Enter a number: ',(input)=>{
            sum += parseInt(input);
            console.log(sum);
            addNumbers(sum,--numsLeft,completionCallback);
        });
    } else {
        completionCallback(sum);
        reader.close();
    }
}

addNumbers(0,3,sum => console.log(`Total Sum: ${sum}`));