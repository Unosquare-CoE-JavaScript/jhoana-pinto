# Chapter 6. Multithreaded Patterns

## Thread Pool

Is a collection of homogeneous worker threads that are each capable of carrying out CPU-intensive tasks that the application may depend on.

### Dispatch Strategies

These strategies draw parallels to those used by reverse proxies for the purpose of sending requests to backend services.

_Round robin_
Each task is given to the next worker in the pool, wrapping around to the beginning once the end has been hit. **Benefit:** each thread gets the exact same number of tasks to perform. **Drawback:** if the complexities of each task is a multiple of the number of threads then there will be an unfair distribution of work.

_Random_
Each task is assigned to a random worker in the pool.

_Least busy_
A count of the number of tasks being performed by each worker is maintained, and when a new task comes along it is given to the least busy worker.

## Mutex: A Basic Lock

A mutually exclusive lock, or mutex, is a mechanism for controlling access to some shared data. It ensures that only one task may use that resource at any given time. Mutexes are straightforward tools to lock access to a resource. They allow critical sections to operate without interference from other threads.

## Streaming Data with Ring Buffers

A ring buffer is an implementation of a first-in-first-out (FIFO) queue, implemented using a pair of indices into an array of data in memory.

## Actor Model

The actor model is a programming pattern for performing concurrent computation. With this model an actor is a primitive container that
allows for executing code and is capable of running logic, creating more actors, sending messages to other actors, and receiving messages.

The actor model is designed to allow computations to run in a highly parallelized manner without necessarily having to worry about where the code is running or even the protocol used to implement the communication.

Actors don’t need to be limited to a single machine. Processes can run on more than one machine and communicate over the network.

Although the individual actors within an actor process are chosen by which is least busy, the actor process itself is chosen randomly.

Individual actors aren’t addressable by other actors; in fact, one actor cannot call code from another actor.
