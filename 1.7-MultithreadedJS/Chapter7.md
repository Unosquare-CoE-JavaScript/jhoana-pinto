# Chapter 7. WebAssembly

WebAssembly (often abbreviated as WASM) is a binary-encoded instruction format that runs on a stackbased virtual machine. It only has access to are memory and functions provided by the host environment.

The memory used by WebAssembly modules is represented by ArrayBuffers, but it can also be represented by SharedArrayBuffers.

## Atomic Operations in WebAssembly

```js
[i32|i64].atomic.[load|load8_u|load16_u|load32_u]
```

The load family of instructions is equivalent to Atomics.load() in JavaScript.

```js
[i32|i64].atomic.[store|store8|store16|store32]
```

The store family of instructions is equivalent to Atomics.store() in JavaScript.

```js
[i32|i64].atomic.[rmw|rmw8|rmw16|rmw32].[add|sub|and|or|xor|xchg|cmpxchg][|_u]
```

The rmw family of instructions all perform read-modifywrite operations, equivalent to add(), sub(), and(), or(), xor(), exchange(), and compareExchange() from the Atomics object in JavaScript, respectively.

```js
memory.atomic.[wait32|wait64]
```

These are equivalent to Atomics.wait() in JavaScript,

```js
memory.atomic.notify;
```

This is equivalent to Atomics.notify() in JavaScript.

```js
atomic.fence;
```

This instruction takes no arguments and doesn’t return anything. It’s intended to be used by higher-level languages that have ways of guaranteeing ordering of nonatomic accesses to shared memory.

## Compiling C Programs to WebAssembly with Emscripten

Emscripten emulates the system calls used by native code compiled to WebAssembly so that programs written in compiled languages can run without many changes.
