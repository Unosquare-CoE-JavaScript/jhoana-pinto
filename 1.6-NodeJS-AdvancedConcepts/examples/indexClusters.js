const cluster = require('cluster');
cluster.schedulingPolicy = cluster.SCHED_RR;

//  Is the file being executed in master mode?
if(cluster.isMaster){
    cluster.fork(); // Cause index.js to be excecuted again but as a child mode
    cluster.fork();
}else{
    // I'm a chold I'll only act as a server
    const express = require('express');
    const app = express();
    
    function doWork(duration) {
         const start = Date.now();
         while(Date.now() - start < duration){
    
         }
    }
    
    app.get('/fast', (req, res) => {
        res.send('cu chao');
    })
    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi cutie B-)');
    })

    
    app.listen(3000);
}
