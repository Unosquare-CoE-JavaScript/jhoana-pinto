###### What is unit testing?

Unit tests helps us catching bugs in our code when we're in the development phase still. It validates test cases for individual functions.

Levels of testing
- Unit testing: the lowest level. Testing at function level.
- Component testing: testing at the library and compiled binary level.
- System testing: Tests the external interfaces of a sydtem which is a collection of sub-systems.
- Performance testing: Testing done at sub-system and system levels to verify timing and resource usages are acceptable.

###### What is TDD (**T**est-**D**riven **D**evelopment)?

- Is when we test our code before adding it to the main code, to make sure it works properly.

###### Phases for TDD:

- **RED:** Write a failing unit test.
- **GREEN:** Write simple production code to make the test pass.
- **Refactor:** Refactor de unit test and the production code to make ir clean.

###### Test Suites

They allow us to group similar tests together.

###### Mocha hooks

- **Before** specifies code that executes before *any* test contained in a describe block.
- **After** specifies code that executes after *any* test contained in a describe block.
- **beforeEach** specifies code that executes before *each* test contained in a describe block.
- **afterEach** specifies code that executes after all *test* contained in a describe block.

###### Testing promises

- Return the promise to your test

###### Testing asyncAwait

- Scpecify "async" on unit test
- Call "await" inside test function to test.

To keep a test out of the testing add an 'x' at the beggining of the test code.

**Test Doubles:** Objects created in the test to replace the real production system collaborators(e.g. API)