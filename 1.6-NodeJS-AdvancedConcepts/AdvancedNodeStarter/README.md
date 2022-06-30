# AdvancedNodeStarter
Starting project for a course on Advanced Node @ Udemy


# NODE JS: Advanced concepts

- **v8:** (30%js 70%-C++) executes js code outside of the browser
- **libuv:** (100%-C++) gives acces to node to the operating system and handles aspects of concurrency
- **nodeJS:** (50%js 50%-C++) it "traduces" our JS code to C++ and provides multiple APIs

*lib folder:* here you'll find the JS code of the functions
*src folder:* here you'll find the C++ implementation of the lib JS code.

>>>> process.binding() - connects JS and C++ functions

*Event loop:* handles async code inside our apps

**threads:** units of instructions of the code(a to-do list), our proces can have multiple threads

**scheduling:** os hability to decide which thread execute. Urgent threads must not wait a lot to be executed.

**tick:** each cycle of a loop

**thread pool:** a series of four threads that can be used for running computationally intensive tasks

**OS async helpers:** when we make use of OS functions this are not added to the thread pool, instead libuv delegates them to the OS and notifes nodeJS when the OS function has been done.

**node's Cluster mode:** used to start up multiple copies of node that are all running the server inside them.
I need to add this line at the beggining of the code so I can use cluster.fork()

```js
cluster.schedulingPolicy = cluster.SCHED_RR;
```

##### PM2 CLI <-- Cluster manager

###### Commands

**pm2 list:** gives a little summary of our clusters
**pm2 show + nameOfApp:** more detailed info of children
**pm2 monit:** helps check on every children in a dashboard
**pm2 delete-cluster + nameOfApp:** removes all the running children

**caching:** a way to improve the read performance of an express app & mongoDB

**Redis:** in-memory data store, a little dababase in the PC that allows you to easily write&read data. Once the computer is turned off this memory will be deleted.

```js
set(a,b,c,'EX',c): 
   // a: key
   // b: value
 //'EX': command to expire cache
   // c: time in sec

hset(x,y,z): used to set a hash. A hash is the equivalen of an object in JS.
   // x: master key of the object
   // y: key inside the hash/object
   // z: value of the key (y)

hget(x,y,z)
   // x: master key of the object
   // y: key inside the hash/object in which we want to read
   // z: callback function
```

redis **_DOES NOT accepts objects_** as parameters, so in order to do so you'll have to use "JSON.Stringify()" and to retreiv it use "JSON.parse(val)"

We can use the function 'promisify' from the library 'util'. This function helps us to retreive a promise using only the keyword 'await' instead of having to pass a callback as a parameter.

**client.flushall()** - deletes all data from redis

**Proxy :** Allows us to manage access to a certain or multiple target objects