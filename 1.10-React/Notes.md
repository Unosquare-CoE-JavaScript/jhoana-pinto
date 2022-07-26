# React Course
React is a library for building user interfaces, it bases on the making of components and their states, props and context. All of this helps to effect user interfaces

**Components:**  independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components.

**virtualDOM:** es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

**Props:** arguments passed into components.

**state:** is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

**"lifting the state up":**lifting state from one level to the next, without necessarily making the state global. 

- **fragments:**
```js
<React.Fragment>
```
functions as a wrapper so we can avoid "divs soups"

**Portals:**
```js
ReactDOM.createPortal();
```
Portals can be used to render an element outside of its parent component’s DOM node while preserving its position in the React hierarchy, allowing it to maintain the properties and behaviors it inherited from the React tree.

**refs/references:** 
```js
useRef();
```
It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it. It is used when we want to change the value of a child component, without making the use of props.

**controled vs uncontroled:** 

In the *controlled* component the form input element’s values and mutations are totally driven by event handlers and the value of the input element is always inferred from the state. On the other hand *uncontrolled* components don’t use any states on input elements or any event handler. This type of component doesn’t care about an input element’s real-time value changes.


```js
useEffect();
```
**exceptions for dependencies in useEffect():**
- state updating functions
- "built-in" APIs or functions like fetch(), localStorage etc
- variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file)

**useEffect: Cleanup**
Is a function in the useEffect Hook. Saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.

**debouncing**
Allows to call a function that ensures that a time-consuming task does not fire so often.

### Reducers
```js
useReducer()
```
Accepts 2 arguments: the reducer function and the initial state. The hook then returns an array of 2 items: the current state and the dispatch function.

### ReactContext /ContextAPI
Allows us to pass down and use (consume) data in whatever component we need in our React app without using props. Should be used only or preferably on low frequency updates.

#### limitations:
- Not optimized for high-frequency changes

#### Rules of Hooks (functions in react that start with 'use'):
1. only call reacthooks in react functions ( react component functions, custom hooks)
2. only call hooks at the top level (not in nested functions, not in any block statements)
3. *for useEffect only:* Always add everything your refer to inside if useEffect() as a dependency

**React.memo(component):** it tells react to only re-evaluate a component if its state changes. This would be usefull for static components that will  almost never change. It shouldn't always be used since it can impact the app performance.

**useCallback:** allows us to store a function across component executions, meaning that the function won't be recreated with every execution.

### State batching
```js
useMemo( function, [dependencies])
```

**functional components.**

**class-based components.** to define state constructor() is needed. state in class-based component is always an object. they should be used with Error Boundaries

render method in classes (react) Component

**componenDidMount():** Called once component mounted (was evaluated & rendered) similar tu useEffect with no dependencies
**componentDidUpdate():** Called once component updated (was evaluated & rendered) similar to useEffect with dependencies
**componentWillUnmount():** Called rigth before component is unmounted (removed from DOM) similart to a cleanup function in iseEffect
 
**errorBoundary**

**custom hooks:** they can use other React hooks and React states.

when naming a custom hook its name must always start with 'use' as in any other react hook.

### Validating forms

**when to do it?**
- When form is submitted
- When an input is losing focus
- On every keystroke

**Redux:** state management system for cross-component or app-wide state.

Reducer functions must be pure, side effect free and synchronous.

when in need of asynchronous tasks or with side effects you can put those tasks inside...
- Components, like useEffect for example
- Action creators

central data store:

**why use redux?**
- Complex setup/management: In more complex apps, managing React Context can lead to deeply nested JSX code and/or huge "Context Provider" components
- Performance: React Context is not optimized for high-frecuency state changes

- **Routing:** it helps to handle different paths and load different components for those specifict paths

#### Deployment steps: 
1. Test code
2. Optimize code
3. Build App for production: with the command build, a build folder will be created with the filesand optimized code needed for your project. if any changes are required they must me done in the src or public folders 
4. Upload production code to server
5. Configure server

#### Optimize code:Lazy loading 
To load code only when it's needed e.g.

```js
const NewQuote = React.lazy(()=> import ('./route/Component')); // this file will be loaded only when needed
// beacuse NewQuote will take some time the Component Suspense is needed, it must wrap the component and have the property of 'fallback' like so...

<Suspense fallback = {<p>Waiting...</p>}>
```

#### Authentication
Needed id content should be protected and/or not accessible by everyone.

- when using [] in a file name nxtjs will know this is a dynamic page

#### nextJS: 
- react framework for production
- fullstack framework for ReactJS

#### key features
- server-side rendering: preparing the content of a page on the server instead that on the client
- file-based routing: define pages and routes with files and folders instead of code
- fullstack capabilities: easily add backend code to reacct apps.

### Kinds of automated Tests

- **Unit tests:** Test the individual building blocs(functions, components) in isolation

- **Integration tests:** Test the combination of multiple building blocks

- **End-to-End tests:** Test complete scenarios in your app as the user would experience them

#### What to test?
Test the different building blocks, the smallest building blocks that make up your app so if any errors occur they can be spotted easily.

#### How to test?
Test success and error cases, also test rare (but possible results)

As a convention you should always name a text file the same as the file to test but with the '.test.js' extention. e.g.

- File to test: App.js
- File test name: App.test.js
```js
test('Test description', () => {
  // Anonymous function
});
```

#### The three A's for writing tests

- **Arrange.** Set up the test data, test conditions and test environment
- **Act.** Run logic that should be tested (e.g. execute function)
- **Assert.** Compare execution results with expected results

e.g.
```js
test("Renders 'Changed!' if the button was clicked", () => {
        // Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText(/Changed!/, { exact: false })   // second param indicates that the test will only succed if the message is exactly the same
        expect(outputElement).toBeInTheDocument();
    })
```