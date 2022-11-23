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

//addNumbers(0,3,sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context) {
    return ()=>{this.apply(context)}
}

// class Lamp {
//     constructor() {
//       this.name = "a lamp";
//     }
//   }
  
//   const turnOn = function() {
//     console.log("Turning on " + this.name);
//   };
  
//   const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
//   const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"


function askIfGreaterThan(el1, el2, callback)  {
    reader.question( `is ${el1} > ${el2} ? (y/n): `, (answer) => { 
        let response = answer === 'y' ? true : false; 
        callback(response);
        
    });
}

//askIfGreaterThan(1 , 2, (input) => { console.log(input)})

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) { 
    if (i < arr.length - 1) {
        console.log(arr) 
        askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
            if (isGreaterThan) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            innerBubbleSortLoop(arr, i + 1, isGreaterThan, outerBubbleSortLoop);
            ;
        });
    } else { 
        outerBubbleSortLoop(madeAnySwaps);
        console.log(arr)
        reader.close()
    }
}

innerBubbleSortLoop([1,4,2], 0, false, (input)=>{console.log(input)} )


  