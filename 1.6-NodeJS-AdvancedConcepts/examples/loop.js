// node myFile.js
const pendingTimersw = [];
const pendingOSTasks = [];
const pendingOperations = [];

//  New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue(){
    // check one: any pending setTimeout/Interval/Immediate?

    // check two: any pending OS tasks? (check server)

    // check three: any pending long running operations? (fs module)
    return pendingTimersw.length || pendingOSTasks.length || pendingOperations.length
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
    // 1)  Node looks at pendingTimers and sees if any functions are ready to be called

    // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

    // 3) Node pauses execution waiting for new events to happen

    // 4) Look at pendingTimers. call any set Immediate

    // 5) Handle any 'close' events

}

// extit bakc to terminal


