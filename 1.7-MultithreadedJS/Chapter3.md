# Chapter 3. Node.js

## The worker_threads Module

Differences in the API compared to the main thread:

- You can’t exit the program with process.exit(). Instead this will just exit the thread.
- You can’t change working directories with process.chdir(). In fact, this function is not even available.
- You can’t handle signals with process.on().

## MessagePort

A MessagePort is one end of a two-way data stream. By default, one is provided to every worker thread to provide a communication channel to and from the main thread. It’s available in the worker thread as the parentPort property of the worker_threads module.

- **_transferList:_** This is a way of transferring ownership of objects from one thread to another.

## Worker Pools with Piscina

- **piscina:** This module encapsulates the work of setting up a worker threads and allocating tasks to them.
