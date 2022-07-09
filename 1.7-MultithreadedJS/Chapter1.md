# Chapter 1. Introduction

#### Cooperative multitasking

- Programs can decide when it would be an appropriate time to let another program run by yielding execution to the operating system.
- When a program fails to yield execution for any reason, no other program can continue executing.

#### Preemptive multitasking

- The operating system would determine which program would run on the CPU at which time.

## What are threads?

A thread is just like a process, except that it shares memory space with the process that it belongs to. A process can have many threads, and each one has its own instruction pointer.

## Concurrency Versus Parallelism

- **Concurrency.** Tasks are run in overlapping time.
- **Parallelism.** Tasks are run at exactly the same time.

_Note:_ Threads do not automatically provide parallelism.

## Single-Threaded JavaScript

Instead of threads as a concurrency primitive, most JavaScript code is written in an event-oriented manner operating on a single execution thread. As various events like user interactions or I/O happen, they trigger the execution of functions previously set to run upon these events.

These functions are called callbacks and are at the core of asynchronous programming in Node.js and the browser. Even in promises or the async/await syntax, callbacks are the underlying primitive.

Realms can be thought of as instances of the JavaScript environment as provided to JavaScript code. Each realm gets its own global object, and all of the associated properties of the global object.

The global object is referred to as _global_ in Node.js and window in browsers, it can also be refered to as _globalThis_.

In Node.js, realms can be constructed with the vm.createContext() function. All the same rules and properties applying to browser frames also apply to Contexts, but in Contexts, you don’t have access to any global properties.

## Hidden Threads

Modern JavaScript engines like V8 use separate threads to handle garbage collection and other features that don’t need to happen in line with JavaScript execution.

In Node.js, libuv is used as an OS-independent asynchronous I/O interface, it uses a pool of worker threads to avoid blocking program code when using otherwise-blocking APIs.

By default, four of these threads are spawned, though this number is configurable via the UV_THREADPOOL_SIZE environment variable, and can be up to 1,024.
