# Chapter 5. Advanced Shared Memory

## Atomic Methods for Coordination

- **Mutex (mutual exclusion):** when a single thread of execution gets exclusive access to a particular piece of data.

- **Futex:** is built on two basic operations, one being “wait” and the other being “wake.”

- **Atomics.wait()**

```js
status = Atomics.wait(typedArray, index, value, (timeout = Infinity));
```

This method first checks typedArray to see if the value at index is equal to value. If it is not, the function returns the value not-equal. If the value is equal, it will then freeze the thread for up to timeout milliseconds. If nothing happens during that time, the function returns the value timed-out. On the other hand, if another thread calls Atomics.notify() for that same index within the time period, the function then returns with a value of ok.

- **Atomics.notify()**

```js
awaken = Atomics.notify(typedArray, index, (count = Infinity));
```

Attempts to awaken other threads that have called Atomics.wait() on the same typedArray and at the same index. If any other threads are currently frozen, then they will wake up. The count value defaults to Infinity, meaning that every thread will be awakened.

The return value is the number of threads that have been awoken once the method is complete.

- **Atomics.waitAsync()**

```js
promise = Atomics.waitAsync(typedArray, index, value, (timeout = Infinity));
```

promise-based version of Atomics.wait(). Is a less-performant, nonblocking version of Atomics.wait() that returns a promise which resolves the status of the wait operation.

> FIFO (first in, first out)
