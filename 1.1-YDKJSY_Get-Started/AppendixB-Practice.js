/* >>  COMPARISONS

scheduleMeeting(..) should take a start time (in 24-hour format as a string “hh:mm”) 
and a meeting duration (number of minutes). It should return true if the meeting falls 
entirely within the work day (according to the times specified in dayStart and dayEnd); 
return false if the meeting violates the work day bounds.

*/ 

let dayStart = "07:30";
let dayEnd = "17:45";

function scheduleMeeting( startTime, duration ){
  
    let afterDayStart = (Number(startTime.substring(0,2))*60 + Number(startTime.substring(3,5)))>(Number(dayStart.substring(0,2)*60)+Number(dayStart.substring(3,5)))
    let beforeDayEnd = (Number(startTime.substring(0,2))*60 + Number(startTime.substring(3,5)))<(Number(dayEnd.substring(0,2)*60)+Number(dayEnd.substring(3,5)))
    
    if(afterDayStart&&beforeDayEnd){

        let hrsRest = dayEnd.substring(0,2)-startTime.substring(0,2);

        let minRest = dayEnd.substring(3,5)-startTime.substring(3,5);
        minRest = String(minRest).length<2?"0"+minRest:minRest;

        let minRestante = hrsRest*60 + Number(minRest);

        if(duration < minRestante){
            return true;
        } else return false;

    } else return false;
}

//scheduleMeeting("16:00", 50);

/* >>  CLOSURES

The range(..) function takes a number as its first argument, representing the 
first number in a desired range of numbers. The second argument is also a number 
representing the end of the desired range (inclusive). If the second argument is 
omitted, then another function should be returned that expects that argument.
*/

function range(start,end) {
    if(end!=undefined){
        return creaRango(start,end)
    } 
    else { return insiste();}

    function creaRango(){
        let rango = []
        for(let i = start; i <= end; i++){
           rango.push(i);
        }
        return rango
    }
    function insiste(){
        console.log("Debe introducir un número para termiar la secuencia");
        return function final ( final ){
            range( start, final );
        }
    }
}

//console.log(range(5));


/* >>  PROTOTYPES

Define a slot machine with three reels that can individually spin(), and then 
display() the current contents of all the reels.

The basic behavior of a single reel is defined in the reel object below. But 
the slot machine needs individual reel objects that delegate to reel, and which 
each have a position property.

A reel only knows how to display() its current slot symbol, but a slot machine 
typically shows three symbols per reel: the current slot (position), one slot 
above (position - 1), and one slot below (position + 1). So displaying the slot
machine should end up displaying a 3 x 3 grid of slot symbols.
*/

function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}
var reel = {
    symbols: [
         "X", "Y", "Z", "W", "$", "*", "<", "@"
    ],
    spin() {
        if (this.position == null) {
        this.position = randMax(
            this.symbols.length - 1
        );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel),
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
        });
    },
    display() {
        let values = [];

        for(let i = 0, n = reel.symbols.length; i < 3; i++){

            let posBef = Object.create(reel);
            posBef.position = (
                n +
                this.reels[i].position-1
                ) % n;

            let posAft = Object.create(reel);
            posAft.position = (
                n +
                this.reels[i].position+1
            ) % n;

            values = [
                    ...values, 
                    reel.display.call(posBef),
                    reel.display.call(this.reels[i]),
                    reel.display.call(posAft),
                ]
        }

        let slotDisplay = `
        ${values[0]} | ${values[3]} | ${values[6]}
        ${values[1]} | ${values[4]} | ${values[7]}
        ${values[2]} | ${values[5]} | ${values[8]}
       `
        return slotDisplay;
    }
};
slotMachine.spin();
slotMachine.display();