# Chapter 4: Around the Global Scope

The global scope is located in the outhermost portion of a file.

The global scope is where:

- JS exposes its built-ins:
    - primitives: undefined, null, Infinity, NaN
    - natives: Date(), Object(), String(), etc.
    - global functions: eval(), parseInt(), etc.
    - namespaces: Math, Atomics, JSON
    - friends of JS: Intl, WebAssembly
- The environment hosting the JS engine exposes its own built-ins:
   - console (and its methods)
   - the DOM (window, document, etc)
   - timers (setTimeout(..), etc)
   - web platform APIs: navigator, history, geolocation, WebRTC, etc.

**window.name** is a pre-defined “global” in a browser context; it’s a property on the global object.

**Web Workers** are a web platform extension on top of browser-JS behavior, which allows a JS file to run in a completely separate thread (operating system wise) from the thread that’s- running the main JS program.

**Developer Tools**, while optimized to be convenient and useful for a variety of developer activities, are not suitable environments to determine or verify explicit and
nuanced behaviors of an actual JS program context.

- ***window*** makes reference to the global object
- ***self*** makes reference to its own scope.
- ***global*** acceses to the global scope from node.
- ***globalThis** standardized reference to the global scope object.
