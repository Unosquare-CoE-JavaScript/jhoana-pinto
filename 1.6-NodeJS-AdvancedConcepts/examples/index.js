const express = require('express');
const app = express();

const crypto = require('crypto');
const { Worker } = require('worker_threads');

app.get('/', (req, res) => {
    const worker = new Worker('./worker.js');   // Creates the interface
   
    worker.on('message', function (message) {   // What happens if we receive a message
      console.log(message);
      res.send('' + message);
    });
   
    worker.postMessage('start!');   // send message
  });
    
app.get('/fast', (req, res) => {
    res.send('cu chao');
})
app.listen(3000);
    

