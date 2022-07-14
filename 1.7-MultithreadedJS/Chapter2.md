# Chapter 2. Browsers

## Dedicated Workers

Web workers allow you to spawn a new environment for executing JavaScript in. JavaScript that is executed in this way is allowed to run in a separate thread from the JavaScript that spawned it. Communication occurs between these two environments by using a pattern called message passing.

## Advanced Dedicated Worker Usage

When it comes to dedicated workers, you can’t inject a < script > tag into the DOM because there’s no DOM associated with the worker.

Instead, you can make use of the importScripts() function, which is a global function only available within web workers. This function accepts one or more arguments that represent the paths to scripts to be loaded. These scripts will be loaded from the same origin as the web page. These scripts are loaded in a synchronous manner, so code that follows the function call will run after the scripts are loaded.

The Worker class provides the most important methods on the instance:

- **worker.postMessage(msg).**
  This sends a message to the worker that is handled by the event loop before invoking the self.onmessage function, passing in msg.

- **worker.onmessage.**
  If assigned, it is in turn invoked when the self.postMessage function inside the worker is called.

- **worker.onerror.**
  If assigned, it is invoked when an error is thrown inside the worker. A single ErrorEvent argument is provided, having .colno, .lineno, .filename, and .message properties. This error will bubble up unless you call err.preventDefault().

- **worker.onmessageerror.**
  If assigned, this is invoked when the worker receives a message that it cannot deserialize.

- **worker.terminate().**
  If called, the worker terminates immediately. Future calls to worker.postMessage() will silently fail.

Inside the dedicated worker, the global self variable is an instance of WorkerGlobalScope.

When instantiating a dedicated worker, there is an optional second argument for specifying the options for the worker. The instantiation takes on the following signature:

```js
const worker = new Worker(filename, options);
```

The options argument is an object that can contain the properties listed here:

- **type.**
  Either classic (default), for a classic JavaScript file, or module, to specify an ECMAScript Module (ESM).

- **credentials.**
  This value determines if HTTP credentials are sent with the request to get the worker file. The value can be omit to exclude the credentials, same-origin to send credentials (but only if the origin matches), or include to always send the credentials.

- **name.**
  This names a dedicated worker and is mostly used for debugging. The value is provided in the worker as a global named name.

## Shared Workers

A shared worker is another type of web worker, it can be accessed by different browser environments, such as different windows (tabs), across iframes, and even from different web workers. They have a different self, being an instance of SharedWorkerGlobalScope. It can only be accessed by JavaScript running on the same origin.

Shared workers aren’t necessarily attached to a particular window (environment). They’re initially spawned by a particular window, but when the first window is closed, the shared worker is kept around.

Shared workers can be used to hold a semipersistent state that is maintained when other windows connect to it.

## Advanced Shared Worker Usage

Shared workers also have access to the importScripts() function for loading external JavaScript files.

```js
const worker = new SharedWorker(filename, nameOrOptions); //Full constructor for the SharedWorker
```

## Service Workers

A service worker functions as a proxy that sits between one or more web pages running in the browser and the server. It isn’t associated with just a single web page can exist and run in the background even when a page isn’t still open.

- **Dedicated worker:** associated with one page.
- **Shared worker:** being associated with one or more pages.
- **Service worker:** associated with zero or more pages.

- Service workers are primarily intended for performing cache management of a website or a single page application.
- Browsers will only allow service workers to run on a web page that has been served using the HTTPS protocol.

## Advanced Service Worker Concepts

- LocalStorage API and await are disabled within service workers.

Every service worker goes through a state change from the time of its inception until the time it can be used. This state is available within the service worker by reading the self.serviceWorker.state property. Here’s a list of the stages it goes through:

- **Parsed.**
  This is the very first state of the service worker. At this point the JavaScript content of the file has been parsed.

- **Installing.**
  The installation has begun but is not yet complete. This happens once per worker version. This state is active after oninstall is called and before the event.respondWith() promise has resolved.

- **Installed.**
  At this point the installation is complete. The onactivate handler is going to be called next.

- **Activating.**
  This state happens when onactivate is called but the event.respondWith() promise hasn’t yet resolved.

- **Activated.**
  The activation is complete, and the worker is ready to do its thing. At this point fetch events will get intercepted.

- **Redundant.**
  At this point, a newer version of the script has been loaded, and the previous script is no longer necessary. This can also be triggered if the worker script download fails, if it contains a syntax error, or if an error is thrown.

## Message Passing Abstractions

## The RPC Pattern

The RPC (Remote Procedure Call) pattern is a way to take a representation of a function and its arguments, serialize them, and pass them to a remote destination to have them get executed.

- **JSON-RPC standard.** This standard defines JSON representations of request and response objects as “notification” objects. JSON-RPC is intended to use JSON as the encoding when serializing messages, particularly when sending messages over the network.
