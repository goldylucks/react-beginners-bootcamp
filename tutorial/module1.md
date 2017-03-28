# Module 1

## TOC

- [step 0 - set the stage](#step-0--set-the-stage)
- [step 1 - scaffold (flip)](#step-1---scaffold-flip)
- [step 2 - scaffold (rest)](#step-2---scaffold-rest)
- [step 3 - first react component (flip)](#step-3---first-react-component-flip)
- [step 4 - first react component (rest)](#step-4---first-react-component-rest)
- [step 5 - separate app to own file (flip)](#step-5---separate-app-to-own-file-flip)
- [step 6 - separate app to own file (rest)](#step-6---separate-app-to-own-file-rest)
- [step 7 - hot reloading (flip)](#step-7---hot-reloading-flip)
- [step 8 - hot reloading (rest)](#step-8---hot-reloading-rest)
- [step 9 - mock ui (flip)](#step-9---mock-ui-flip)
- [step 10 - mock ui (rest)](#step-10---mock-ui-rest)
- [step 11 - class components and initial state](#step-11---class-components-and-initial-state-flip)
- [step 12 - class components and initial state](#step-12---class-components-and-initial-state-rest)
- [step 13 - state conditional rendering (flip)](#step-13---state-conditional-rendering-flip)
- [step 14 - state conditional rendering (rest)](#step-14---state-conditional-rendering-rest)
- [step 15 - input onchange handlers (guess)](#step-15---input-onchange-handlers-guess)
- [step 16 - input onchange handlers (rest)](#step-16---input-onchange-handlers-rest)
- [step 17 - click handlers (flip)](#step-17---click-handlers-flip)
- [step 18 - click handlers (rest)](#step-18---click-handlers-rest)
- [step 19 - tying it all together (flip)](#step-19---tying-it-all-together-flip)
- [step 20 - tying it all together (rest)](#step-20---tying-it-all-together-rest)
- [step 21 - es6 destructuring (flip)](#step-21---es6-destructuring-flip)
- [step 22 - es6 destructuring (rest)](#step-22---es6-destructuring-rest)
- [step 23 - extract App component (flip)](#step-23---extract-app-component-flip)
- [step 24 - extract App component (rest)](#step-23---extract-app-component-rest)
- [step 25 - flow (flip)](#step-25---flow-flip)
- [step 26 - flow (rest)](#step-26---flow-rest)

## step 0 - set the stage
Checkout a new local branch
```bash
$ git checkout -b module-1
```
create `src/client/index.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <title>React Bootcamp | Adam Method</title>
</head>scaffold
<body>
  <h1>html outside of react</h1>
</body>
</html>
```

create `src/client/index.jsx`:
```jsx

console.log('js loaded')

```

open chrome at `localhost:8000`, see the wecloming headline, and commit the changes:
```bash
$ git add src
$ git commit -m "(module-1) step 0: set the stage"
```

## step 1 - scaffold (Flip)
in `src/client/index.html` add the following line after the `h1` title:
```diff
<h1>html outside of react</h1>
+<div id="flip-app"></div>
```

modify `src/client/index.jsx` to:
```jsx
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <h2>Flip</h2>,
  document.getElementById('flip-app'),
)

```

See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "(module-1) step 1: Scaffold (Flip)"
```

## Step 2 - scaffold (Rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth
- series

The steps for each app are:
1. `src/client/index.html` - add div with id APPNAME-app
2. `src/client/index.jsx` - add `ReactDOM.render(<h2>APPNAME</h2>, document.getElementById(APPNAME-app)`

See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "(module-1) step 2: scaffold (Rest)"
```

## Step 3 - first React component (Flip)
in `src/client/index.jsx` make the following changes
```diff
+const FlipApp = () => <h2>Flip!</h2>

ReactDOM.render(
+  <FlipApp />,
-  <h2>Flip</h2>,
  document.getElementById('flip-app'),
)

```

See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "(module-1) step 3: first react component (Flip)"
```

## Step 4 - first React component (Rest)
Repeat for rest of apps, in the order, one at a time.
See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "(module-1) step 4: first react component (Rest)"
```

## step 5 - separate app to own file (Flip)
create file `src/client/Flip.jsx`:
```jsx
import React from 'react'

const FlipApp = () => <h1>Flip!</h1>

export default FlipApp

```

modify `src/client/index.jsx`:
```diff
+import FlipApp from './Flip'
-const FlipApp = () => <h1>Flip!</h1>
```

See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "(module-1) step 5: separate app to own file (Flip)"
```

## step 6 - separate app to own file (Rest)
Repeat for rest of apps, in the order, one at a time.
See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "(module-1) step 6: separate app to own file (Rest)"
```

## Step 7 - hot reloading (Flip)
modify `src/client/index.jsx`
```diff
+import { AppContainer } from 'react-hot-loader'

+const renderApp = (AppComponent, appName) => {
+  ReactDOM.render(
+    <AppContainer>
+      <AppComponent />,
+    <AppContainer>
+    document.getElementById(`${appName}-app),
+  )

+if (module.hot) {
+  module.hot.accept('./Flip', () => {
+    const NextFlipApp = require('./Flip').default // eslint-disable-line global-require
+    renderApp(NextFlipApp, 'flip')
+  })
+}

+render(FlipApp, 'flip')

-ReactDOM.render(
-  <FlipApp />,
-  document.getElementById('flipp-app'),
-)
```

Make a change in `src/client/Flip.jsx` and watch the changes in the browser, no refresh baby!

Make a change in one of the other apps' files and watch the browser refreshes. We'll fix it in the next step!

commit your changes
```bash
$ git add src
$ git commit -m "(module-1) step 7: hot realoading (Flip)"
```

## Step 8 - hot reloading (Rest)
Repeat for rest of apps, in the order, one at a time.

make a change in each file and see the updates in the browser without refreshing. Pretty sweet eh?

The steps for each app are:
1. delete `ReactDOM.render(...)`
2. add `renderApp(...)`
3. inside the `if (module.hot)` block, add the funky accept thingie:
```diff
if (module.hot) {
+  module.hot.accept('./APPFILENAME', () => {
+    const NextAPPFILENAMEApp = require('./APPFILENAME').default // eslint-disable-line global-require
+    renderApp(NextAPPNAMEApp, 'APPNAME') // note here first letter is lowercase
+  })
}
```

commit the changes
```bash
$ git add src
$ git commit -m "(module-1) step 8: hot reloading (Rest)"
```

## Step 9 - mock UI (Flip)
in `src/client/index.html` add the following to the `head`:
```diff
<head>
  <title>React Bootcamp | Adam Method</title>
+  <style>
+    .app-container {
+      border-top: 1px solid #eee;
+    }
+  </style>
</head>
```
in `src/client/index.jsx`
```diff
import { AppContainer } from 'react-hot-loader'
+import 'bootstrap/dist/css/bootstrap.min.css'

```
in `src/client/Flip.jsx`
add styles and mock the UI of the app:
```jsx
const styles = {
  score: {
    color: 'green',
  },
  success: {
    color: 'limegreen',
  },
  failure: {
    color: 'red',
  },
}

const FlipApp = () =>
  <div className="container app-container">
    <h2>Flip</h2>
    <div className="row">
      <div className="col-md-4">
        <h3>Controls</h3>
        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-primary btn-block">Heads</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary btn-block">Tails</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-default btn-block">Reset</button>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-md-offset-2">
        <h3>Output</h3>
        <div className="well">
          <span style={styles.score}>Score: <strong>0</strong></span>
          <div style={styles.success}>Heads: you win!</div>
          <div style={styles.failure}>Heads: you lose!</div>
          <div style={styles.success}>Tails: you win!</div>
          <div style={styles.failure}>Tails: you lose!</div>
        </div>
      </div>
    </div>
  </div>

```

See the changes in the browser and commit (ain't our app look pretty?)
```bash
$ git add src
$ git commit -m "(module-1) step 9: mock ui (Flip)"
```

## Step 10 - mock UI (Rest)
Repeat for rest of apps, in the order, one at a time.
The steps for each app are:
- Copy the template from `tutorial/ui-mocks/APPNAME.html`
- "reactify" dom properties i.e. `class` -> `className`
- declare styles as `const styles = {...}` and apply in relevant places, like in Flip app   
- Pay attention to your editor's linting and chrome console as it will warn you for properties you didn't "reactified"
(secret hint: class is not the only property to "reactify". Trust in the console my friend)

See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "(module-1) step 10: mock ui (Rest)"
```

Oh my! Now we're talkin'! Look at those sexy apps we got here!

## Step 11 - class components and initial state (Flip)
To add state to a component, we need to write it in class syntax. modify `src/client/Flip.jsx`:
```diff
-const FlipApp = () =>
+class FlipApp extends React.Component {
+
+  state = {
+    score: 0,
+    flipResult: null,
+    guessed: null,
+  }
+
+  render() {
+    return (
      <div className="container app-container">
+        <span style={styles.score}>Score: <strong>{this.state.score}</strong></span>
-        <span style={styles.score}>Score: <strong>0</strong></span>
-        <div style={styles.success}>Heads: you win!</div>
-        <div style={styles.failure}>Heads: you lose!</div>
-        <div style={styles.success}>Tails: you win!</div>
-        <div style={styles.failure}>Tails: you lose!</div>
      </div>
+    )
+  }
+}

```
Change score in `state = ` and watch the browser changes. commit
```bash
$ git add src
$ git commit -m "(module-1) step 11: class components and initial state (Flip)"
```

## Step 12 - class components and initial state (Rest)
Repeat for rest of apps, in the order, one at a time.

The steps for each app are:
1. change `const SomeApp = ...` to `class SomeApp extends React.Component`
2. put all the JSX syntax inside a `render` method of SomeApp class: `render() { return (JSX stuff) }`
3. add initial state to classs `state = {...}`. put everything dynamic there
4. in the `render` method replace hardcoded values with {this.state.someValue}

NOTE: don't worry about linting errors for not using `styles`.

play with the initial state values and see the changes in the browser. When you're done goofing around, commit
```bash
$ git add src
$ git commit -m "(module-1) step 11: class components and initial state (Rest)"
```

Your commit should fail due to linting errors. add the no verify flag: to work around that:  
`$ git commit -m "(module-1) step 12" --no-verify`

## Step 13 - state conditional rendering (Flip)
modify `src/client/Flip.jsx`:
```jsx
class FlipApp extends React.Component {
  state = {...}

  renderOutput() {
    if (!this.state.flipResult) {
      return null
    }
    if (this.state.flipResult !== this.state.guessed) {
      return <div style={styles.failure}>{this.state.flipResult}: you lose!</div>
    }
    return <div style={styles.success}>{this.state.flipResult}: you win!</div>
  }

  render() {
    return (
      ...
        <div className="well">
          <span style={styles.score}>Score: <strong>{this.state.score}</strong></span>
          { this.renderOutput() }
        </div>
      ...
    )
  }
```

set the initial state to `{ score: 0, flipResult: 'Heads', guessed: 'Heads' }` and watch what happens. Play with different `'Heads'` and `'Tails'` combinations.

See the changes in the brwoser and commit
```bash
$ git add src
$ git commit -m "(module-1) step 13: state conditional rendering"
```

## Step 14 - state conditional rendering (Rest)
Repeat for rest of apps, in the order, one at a time.
The steps for each app are:
1. add a class method `renderOutput() {}`
2. put there contents of `<div className="well">...</div>`
3. manage rendering different outputs based on the state
4. add `this.renderOutput()` inside the well
5. test by changing the initial hard coded state

See the changes in the brwoser and commit
```bash
$ git add src
$ git commit -m "(module-1) step 14"
```

## Step 15 - input onChange handlers (Guess)
modify `src/client/Guessnumber.jsx`:
```diff
<div className="input-group">
  <input
    +onChange={evt => this.setState({ guessInput: evt.target.value })}
  />
</div>
+<h4><strong>guessInput</strong>: {this.state.guessInput}</h4>
```
Play with the guess input field and watch the magic in action!

commit
```bash
$ git add src
$ git commit -m "(module-1) step 15: input onChange handlers (Guess)"
```

## Step 16 - input onChange handlers (Rest)
Repeat for rest of apps, in the order, one at a time.

The steps for each app are:
1. to each input, add `onChange={evt => this.setState({ stateKeyToModify: evt.target.value })}`
2. (recommended): add after each input `<h4><strong>KEY_TO_MODIFY</strong>: {this.state.KEY_TO_MODIFY</h4>`

Play around for a bit, see the changes, and commit  
```bash
$ git add src
$ git commit -m "(module-1) step 16: input onChange handlers (Rest)"
```

## Step 17 - click handlers (Flip)
modify `src/client/Flip.jsx`:  
add guess and reset methods, and onClick handlers to the buttons:
```diff
  guess(guessed) {
    console.log('[guessed] you guessed', guessed)
  }

  reset() {
    console.log('[reset]')
  }

  render() {
    ...
      ...
        <button className="btn btn-primary btn-block" onClick={() => this.guess('Heads')}>Heads</button>
      ...
      ...
        <button className="btn btn-primary btn-block" onClick={() => this.guess('Tails')}>Tails</button>
      ...
      ...
        <button className="btn btn-default btn-block" onClick={() => this.reset()}>Reset</button>
      ...
    ...
  }
```
click the buttons and watch the console. Can you see that? Progress!  
commit
```bash
$ git add src
$ git commit -m "(module-1) step 17: click handlers (Flip)" --no-verify
```

## Step 18 - click handlers (Rest)
Repeat for rest of apps, in the order, one at a time.

The steps for each app are:
1. for each button, add the relevant class method i.e. `guess`, `reset`, and log to the console
2. to each button, add `onClick={() => this.theMethod(someArg)}`

click the buttons and watch the console. Can you see that? BIG Progress!  
commit
```bash
$ git add src
$ git commit -m "(module-1) step 18 - click handlers (Rest)"
```

## Step 19 - tying it all together (Flip)

modify `src/client/Flip.jsx`:  
```diff
  guess(guessed) {
-    console.log('[reset]')    
+    const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
+    this.setState({
+      guessed: guessed,
+      flipResult: flipResult,
+      score: flipResult === guessed ? this.state.score + 1 : this.state.score - 1
+    })
  }
```
you will see linting errors since in ES6 we can shorten the `setState` object: `this.setState({ guessed, flipResult, score: ... })`  

fix that and implement the reset method:
```diff
  guess(guessed) {
    const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
    this.setState({
-      guessed: guessed,
+      guessed,
-      flipResult: flipResult,
+      flipResult,
       score: flipResult === guessed ? this.state.score + 1 : this.state.score - 1
    })
  }

  reset() {
-    console.log('[reset]')
+    this.setState({ score: 0, flipResult: null, guessed: null })
  }
```
congratulations, you have created a fully blown large scale react app ... all by yourself!  Okay it's just a tiny stupid app, and you did get some (exceptional?) guidance, but it's a start ;)

marvel on your creation for a while, and let's move on. commit  
```bash
$ git add src
$ git commit -m "(module-1) step 19: tying it all together (Flip)" --no-verify
```

## Step 20 - tying it all together (Rest)
Repeat for rest of apps, in the order, one at a time, and commit the changes
```bash
$ git add src
$ git commit -m "(module-1) step 20: tying it all together (Rest)"
```

## Step 21 - ES6 destructuring (Flip)
Time for for some ES6 magic baby! CHeck this out:
```diff
guess(guessed) {
+ const { score } = this.state
  const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
  this.setState({
    guessed,
    flipResult,
-   score: flipResult === guessed ? this.state.score + 1 : this.state.score - 1,
+   score: flipResult === guessed ? score + 1 : score - 1,
  })
}
```
Cool eh? Let's implement the same for the other methods:
```diff
renderOutput() {
+  const { flipResult, guessed } = this.state
-  if (!this.state.flipResult) {
+  if (!flipResult) {
    return null
  }
-  if (this.state.flipResult === this.state.guessed) {
+  if (flipResult === guessed) {
-    return <div style={styles.success}>{this.state.flipResult}: You win!</div>
+    return <div style={styles.success}>{flipResult}: You win!</div>
  }
-  return <div style={styles.failure}>{this.state.flipResult}: You lose!</div>
+  return <div style={styles.failure}>{flipResult}: You lose!</div>
}
```
ahh ... Look how pretty and concise (not to mention awesome) our code is! Nothing to see in the browser since this is just [refactoring][refactor]. let's commit and move on:
```bash
$ git add src
$ git commit -m "(module-1) step 21: ES6 destructuring (Flip)"
```

## Step 22 - ES6 destructuring (Rest)
Repeat for rest of apps, in the order, one at a time.
The steps for each app are:
1. in all methods that use `this.state.whateva`, add a declaration of `const { whateva } = this.state`
2. wherever `this.state.whateva` is used, replace it with `whateva`
```bash
$ git add src
$ git commit -m "(module-1) step 22: ES6 destructuring (Flip)"
```

## Step 23 - Extract App component (Flip)
Seems like all our apps follow this structure:
```jsx
<div className="container app-container">
  <h2>APPNAME</h2>
  <div className="row">
    <div className="col-md-4">
      <h3>Controls</h3>
      // some controls here ...
    </div>
    <div className="col-md-2 col-md-offset-2">
      <h3>Output</h3>
      <div className="well">
        // some output here ...
      </div>
    </div>
  </div>
</div>
```
So for each app we need to pass to appname, controls, and output. The rest (layout) can be offloaded to a reusable App component. Let's create it at `src/client/App.jsx`:
```jsx
import React from 'react'

const App = ({ appName, controls, output }) =>
  <div className="container app-container">
    <h2>{appName}</h2>
    <div className="row">
      <div className="col-md-4">
        <h3>Controls</h3>
        {controls}
      </div>
      <div className="col-md-2 col-md-offset-2">
        <h3>Output</h3>
        <div className="well">
          {output}
        </div>
      </div>
    </div>
  </div>

export default App
```
and implement it in our Flip app:
```diff
import React from 'react'

+import App from './App'
  render() {
// delete previous render content ...
+    <App
+      appName="Flip (using App)"
+      controls={
+        <div className="row">
+          <div className="col-md-4">
+            <button className="btn btn-primary btn-block" onClick={() => this.guess('Heads')}>Heads</button>
+          </div>
+          <div className="col-md-4">
+            <button className="btn btn-primary btn-block" onClick={() => this.guess('Tails')}>Tails</button>
+          </div>
+          <div className="col-md-4">
+            <button className="btn btn-default btn-block" onClick={() => this.reset()}>Reset</button>
+          </div>
+        </div>
+      }
+      output={
+        <div>
+          <span style={styles.score}>Score: <strong>{this.state.score}</strong></span>
+          {this.renderOutput()}
+        </div>
+      }
+    />
  }
```
See the changes in the browser and commit:
```bash
$ git add src
$ git commit -m "(module-1) step 23: extract App component (Flip)" --no-verify
```

## Step 24 - Extract App component (Rest)
Repeat for rest of apps, in the order, one at a time. Steps to follow are:
1. import App component
2. replace render method contents with the app components, passing it the following properties: appName, controls, output
Make sure you add "(using App)" to the appName to make sure the changes are rendered.
See the changes in the browser and commit:
```bash
$ git add src
$ git commit -m "(module-1) step 24: extract App component (Rest)" --no-verify
```

## Step 25 - Flow (App)
modify `src/client/App.jsx`:
```diff
+// @flow

import React from 'react'

+type Props = {
+  appName: string,
+  controls: Object,
+  output: ?Object,
+}

-const App = ({ appName, controls, output }) =>
+const App = ({ appName, controls, output }: Props) =>
```

```bash
$ git add src
$ git commit -m "(module-1) step 25: flow (app)"
```

## Step 26 - Flow (Rest)
Implement flow in rest of the apps, by order, one at a time. Steps are:
1. add `// @flow` at the top of the file APPNAME.jsx
2. correct errors as they surface
```bash
$ git add src
$ git commit -m "(module-1) step 26: flow (rest)" --no-verify
```

[refactor]: https://en.wikipedia.org/wiki/Code_refactoring
