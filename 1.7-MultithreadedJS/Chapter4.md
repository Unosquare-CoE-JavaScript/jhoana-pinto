# Chapter 4. Shared Memory

- **Atomics object and the SharedArrayBuffer class:** These allow you to share memory between two threads without depending on message passing.

## Intro to Shared Memory

### Shared Memory in the Browser

- **_crossOriginIsolated:_** global variable that tells if the JavaScript code currently being run is capable of instantiating a SharedArrayBuffer instance.

A _SharedArrayBuffer_ requires additional HTTP headers to be set.

## SharedArrayBuffer and TypedArrays

Instances of ArrayBuffer and SharedArrayBuffer represent a buffer of binary data that is of fixed length and cannot be resized.

Both _ArrayBuffer_ and _SharedArrayBuffer_ inherit from _Object_ and come with those associated methods. Other than that, they come with two properties. The first is the readonly value _.byteLength_, representing the byte length of the buffer, and the second is the _.slice_(_begin_, _end_) method, which returns a copy of the buffer depending on the range that is provided.

- **View:** it reads and writes to the underlying buffer. This class can’t be instantiated directly and isn’t available as a global, but it can be accessed by grabbing the .prototype property from an instantiated child class.

## Atomic Methods for Data Manipulation

- **Atomics.add()**

```js
old = Atomics.add(typedArray, index, value);
```

This method adds the provided value to the existing value in a typedArray that is located at index. The old value is returned.

- **Atomics.and()**

```js
old = Atomics.and(typedArray, index, value);
```

This method performs a bitwise and using value with the existing value in typedArray located at index. The old value is returned.

- **Atomics.compareExchange()**

```js
old = Atomics.compareExchange(typedArray, index, oldExpectedValue, value);
```

This method checks typedArray to see if the value oldExpectedValue is located at index. If it is, then the value is replaced with value. If not, then nothing happens. The old value is always returned.

- **Atomics.exchange()**

```js
old = Atomics.exchange(typedArray, index, value);
```

This method sets the value in typedArray located at index to value. The old value is returned.

- **Atomics.isLockFree()**

```js
free = Atomics.isLockFree(size);
```

This method returns a true if size is a value that appears as the BYTES_PER_ELEMENT for any of the TypedArray subclasses (usually 1, 2, 4, 8), and a false if otherwise.

- **Atomics.load()**

```js
value = Atomics.load(typedArray, index);
```

This method returns the value in typedArray located at index.

- **Atomics.or()**

```js
old = Atomics.or(typedArray, index, value);
```

This method performs a bitwise or using value with the existing value in typedArray located at index. The old value is returned.

- **Atomics.store()**

```js
value = Atomics.store(typedArray, index, value);
```

This method stores the provided value in typedArray located at index. The value that was passed in is then returned.

- **Atomics.sub()**

```js
old = Atomics.sub(typedArray, index, value);
```

This method subtracts the provided value from the existing value in typedArray that is located at index. The old value is returned.

- **Atomics.xor()**

```js
old = Atomics.xor(typedArray, index, value);
```

This method performs a bitwise xor using value with the existing value in typedArray located at index. The old value is returned.
