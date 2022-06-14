/* 
>>  COMPARISONS

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

scheduleMeeting("16:00", 50);

/*
>>  CLOSURES

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

console.log(range(5));


/*
>>  PROTOTYPES


*/