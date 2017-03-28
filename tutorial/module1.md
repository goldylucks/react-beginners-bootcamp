# Module 1
in this module we will cover the basics of [React][react-url] by building 3 tiny apps from scratch, then in the next module we'll combine them to one mother app.

## TOC
- [set the stage](#set-the-stage)
- [scaffold (flip)](#scaffold-(flip))
- [scaffold (rest)](#scaffold-(rest))
- [App component (flip)](#App-component-(flip))
- [App component (rest)](#App-component-(rest))
- [props validation](#props-validation)
- [mock UI (flip)](#mock UI-(flip))
- [mock UI (rest)](#mock UI-(rest))
- [class components and initial state (flip)](#class-components-and-initial-state-(flip))
- [class components and initial state (rest)](#class-components-and-initial-state-(rest))
- [state conditional rendering (flip)](#state-conditional-rendering-(flip))
- [state conditional rendering (rest)](#state-conditional-rendering-(rest))
- [input onChange handlers (guess)](#input-onChange-handlers-(guess))
- [input onChange handlers (rest)](#input-onChange-handlers-(rest))
- [click handlers (flip)](#click-handlers-(flip))
- [click handlers (rest)](#click-handlers-(rest))
- [tying it all together (flip)](#tying-it-all-together-(flip))
- [tying it all together (rest)](#tying-it-all-together-(rest))
- [ES6 destructuring (flip)](#ES6-destructuring-(flip))
- [ES6 destructuring (rest)](#ES6-destructuring-(rest))
- [flow (flip)](#flow-(flip))
- [flow (rest)](#flow-(rest))

## set the stage
```bash
$ git checkout module1
```

## scaffold (flip)
modify `src/client/index.html`
```diff
<div id="welcome-app"></div>
+<div id="flip-app"></div>
```

create `src/client/flip.jsx`
```diff
import React from 'react'

const Flip = () => (
  <h2>Flip</h2>
)

export default Flip
```

modify `src/client/client.jsx`
```diff
import Welcome from './Welcome'
+import Flip from './Flip'

render(Welcome)
+render(flip)

if (module.hot) {
  // ...
}

+if (module.hot) {
+  // flow-disable-next-line
+  module.hot.accept('./Flip', () => {
+    // eslint-disable-next-line global-require
+    const nextFlip = require('./Flip').default
+    render(nextFlip)
+  })
+}

```

See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "scaffold (flip)"
```

## scaffold (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth

See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "scaffold (rest)"
```

## App component (flip)
create `src/client/App.jsx`
```jsx
import React from 'react'

const App = ({ title }) => (
  <h1>{ title }</h1>
)

export default App

```
modify `src/client/Flip.jsx`
```diff
+import App from './App'

-<h2>Flip</h2>
+<App title="Flip" />
```

See the changes in the browser and commit
```bash
$ git add src
# add the --no-verify flag to bypass the pre-commit hook
$ git commit -m "App component (flip)" --no-verify
```

## App component (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth

See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "App component (rest)" --no-verify
```

## props validation
modify `src/client/App.jsx`
```diff
-const App = ({ title }) => (
+type Props = {
+  title: string,
+}
+
+const App = ({ title }: Props) => (
```
commit WITHOUT the `--no-verify` flag
```bash
$ git add src
$ git commit -m "props validation"
```

## mock UI (flip)
find mocks for the UIs of the apps in `tutorial/ui-mocks`
modify `src/client/index.html`
```diff
<head>
  ...
+  <style>
+    .app-container {
+      border-top: 1px solid #eee;
+    }
+  </style>
</head>
```
modify `src/client/client.jsx`
```diff
import ReactDOM from 'react-dom'
+import 'bootstrap/dist/css/bootstrap.min.css'
```
modify `src/client/App.jsx`
```diff
type Props = {
  title: string,
+  controls: Object,
+  output: ?Object,
}

-const App = ({ title }: Props) => (
-  <h1>{ title }</h1>
+const App = ({ title, controls, output }: Props) => (
+  <div className="container app-container">
+    <h1>{ title }</h1>
+    <div className="row">
+      <div className="col-md-4">
+        <h3>Controls</h3>
+        {controls}
+      </div>
+      <div className="col-md-2 col-md-offset-2">
+        <h3>Output</h3>
+        <div className="well">
+          {output}
+        </div>
+      </div>
+    </div>
+  </div>
)
```
modify `src/client/Flip.jsx`
```diff
import App from './App'

+const styles = {
+  success: {
+    color: 'limegreen',
+  },
+  failure: {
+    color: 'red',
+  },
+}
+
const Flip = () => (
-  <App title="Flip" />
+  <App
+    title="Flip"
+    controls={
+      <div className="row">
+        <div className="col-md-4">
+          <button className="btn btn-primary btn-block">Heads</button>
+        </div>
+        <div className="col-md-4">
+          <button className="btn btn-primary btn-block">Tails</button>
+        </div>
+        <div className="col-md-4">
+          <button className="btn btn-default btn-block">Reset</button>
+        </div>
+      </div>
+    }
+    output={
+      <div>
+        <span style={{ color: 'green' }}>Score: <strong>0</strong></span>
+        <div style={styles.success}>Heads: you win!</div>
+        <div style={styles.fialure}>Heads: you lose!</div>
+        <div style={styles.success}>Tails: you win!</div>
+        <div style={styles.fialure}>Tails: you lose!</div>
+      </div>
+    }
+  />
)
```

See the changes in the browser and commit (ain't our app look pretty?)
```bash
$ git add src
$ git commit -m "mock UI (flip)"
```

## mock UI (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth

See the changes in the browser and commit
```bash
$ git add src
$ git commit -m "mock ui (rest)"
```
Oh my! Now we're talkin'! Look at those sexy apps we got here!

## class components and initial state (flip)
To add state to a component, we need to write it in class syntax.  
modify `src/client/Flip.jsx`
```diff
-const Flip = () => (
-  <App
-    title="Flip"
-    controls={
-      <div className="row">
-        <div className="col-md-4">
-          <button className="btn btn-primary btn-block">Heads</button>
-        </div>
-        <div className="col-md-4">
-          <button className="btn btn-primary btn-block">Tails</button>
-        </div>
-        <div className="col-md-4">
-          <button className="btn btn-default btn-block">Reset</button>
-        </div>
-      </div>
-    }
-    output={
-      <div>
-        <span style={{ color: 'green' }}>Score: <strong>0</strong></span>
-        <div style={styles.success}>Heads: you win!</div>
-        <div style={styles.fialure}>Heads: you lose!</div>
-        <div style={styles.success}>Tails: you win!</div>
-        <div style={styles.fialure}>Tails: you lose!</div>
-      </div>
-    }
-  />
-)
+class Flip extends React.Component {
+  state = {
+    score: 0,
+  }
+
+  render() {
+    return (
+      <App
+        title="Flip"
+        controls={
+          <div className="row">
+            <div className="col-md-4">
+              <button className="btn btn-primary btn-block">Heads</button>
+            </div>
+            <div className="col-md-4">
+              <button className="btn btn-primary btn-block">Tails</button>
+            </div>
+            <div className="col-md-4">
+              <button className="btn btn-default btn-block">Reset</button>
+            </div>
+          </div>
+        }
+        output={
+          <div>
+            <span style={{ color: 'green' }}>Score: <strong>{this.state.score}</strong></span>
+            <div style={styles.success}>Heads: you win!</div>
+            <div style={styles.fialure}>Heads: you lose!</div>
+            <div style={styles.success}>Tails: you win!</div>
+            <div style={styles.fialure}>Tails: you lose!</div>
+          </div>
+        }
+      />
+    )
+  }
+}
```
Change score in `state = ` and watch the browser changes. commit
```bash
$ git add src
$ git commit -m "class components and initial state (flip)"
```

## class components and initial state (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth

play with the initial state values and see the changes in the browser. When you're done goofing around, commit
```bash
$ git add src
$ git commit -m "class components and initial state (rest)"
```

## state conditional rendering (flip)
modify `src/client/Flip.jsx`:
```diff
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
$ git commit -m "state conditional rendering (flip)"
```

## state conditional rendering (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth

See the changes in the brwoser and commit
```bash
$ git add src
$ git commit -m "state conditional rendering (rest)"
```

## input onChange handlers (guess)
modify `src/client/Guessnumber.jsx`:
```diff
<div className="input-group">
  <input
+   value={this.state.guessedNumberInput}
+   onChange={evt => this.setState({ guessedNumberInput: evt.target.value })}
  />
</div>
```
Play with the guess input field in react devtools and watch the state changes!

commit
```bash
$ git add src
$ git commit -m "input onChange handlers (guess)"
```

## input onChange handlers (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- fizzbuzz
- auth

Play around for a bit, see the changes, and commit  
```bash
$ git add src
$ git commit -m "input onChange handlers (rest)"
```

## click handlers (flip)
modify `src/client/Flip.jsx`:  
```diff
+  // eslint-disable-next-line class-methods-use-this
+  guess(guessed) {
+    console.log('you guessed', guessed)
+  }
+
+  // eslint-disable-next-line class-methods-use-this
+  reset() {
+    console.log('you reset!')
+  }
+

  render() {
    <div className="col-md-4">
-     <button className="btn btn-primary btn-block">Heads</button>
+     <button className="btn btn-primary btn-block" onClick={() => this.guess('Heads')}>Heads</button>
    </div>
    <div className="col-md-4">
-     <button className="btn btn-primary btn-block">Tails</button>
+     <button className="btn btn-primary btn-block" onClick={() => this.guess('Tails')}>Tails</button>
    </div>
    <div className="col-md-4">
-     <button className="btn btn-default btn-block">Reset</button>
+     <button className="btn btn-default btn-block" onClick={() => this.reset()}>Reset</button>
    </div>
  }
```
click the buttons and watch the console. Can you see that? Progress!  
commit
```bash
$ git add src
$ git commit -m "click handlers (flip)"
```

## click handlers (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth

click the buttons and watch the console. Can you see that? BIG Progress!  
commit
```bash
$ git add src
$ git commit -m "click handlers (rest)"
```

## tying it all together (flip)
modify `src/client/Flip.jsx`:  
```diff
-  // eslint-disable-next-line class-methods-use-this
   guess(guessed) {
-    console.log('you guessed', guessed)
+    const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
+    this.setState({
+      guessed,
+      flipResult,
+      score: flipResult === guessed ? this.state.score + 1 : this.state.score - 1,
+    })
   }

-  // eslint-disable-next-line class-methods-use-this
   reset() {
-    console.log('you reset!')
+    this.setState({
+      score: 0,
+      guessed: '',
+      flipResult: '',
+    })
   }
```
congratulations, you have created a fully blown large scale react app ... all by yourself!  Okay it's just a tiny stupid app, and you did get some (exceptional?) guidance, but it's a start ;)

marvel on your creation for a while, and let's move on. commit  
```bash
$ git add src
$ git commit -m "tying it all together (flip)"
```

## tying it all together (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth

```bash
$ git add src
$ git commit -m "tying it all together (rest)"
```

## ES6 destructuring (flip)
Time for for some ES6 magic baby! Check this out:
```diff
guess(guessed) {
+    const { score } = this.state
  const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
  this.setState({
    guessed,
    flipResult,
-      score: flipResult === guessed ? this.state.score + 1 : this.state.score - 1,
+      score: flipResult === guessed ? score + 1 : score - 1,
  })
}

renderOutput() {
-    if (!this.state.flipResult) {
+    const { flipResult, guessed } = this.state
+    if (!flipResult) {
    return null
  }
-    if (this.state.flipResult !== this.state.guessed) {
-      return <div style={styles.failure}>{this.state.flipResult}: you lose!</div>
+    if (flipResult !== guessed) {
+      return <div style={styles.failure}>{flipResult}: you lose!</div>
  }
-    return <div style={styles.success}>{this.state.flipResult}: you win!</div>
+    return <div style={styles.success}>{flipResult}: you win!</div>
}
```
ahh ... Look how pretty and concise (not to mention awesome) our code is! Nothing to see in the browser since this is just [refactoring][refactor]. let's commit and move on:
```bash
$ git add src
$ git commit -m "ES6 destructuring (flip)"
```

## ES6 destructuring (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth

```bash
$ git add src
$ git commit -m "ES6 destructuring (flip)"
```

## flow (flip)
[Flow][flow-url] is a fantastic tool by <s>our frien...</s> the guys at facebook HQ made for [static type checking][static-type-checking-url], and it integrates beautifully with [React][react-url].
modify `src/client/Flip.jsx`:
```diff
+// @flow

import React from 'react'

class Flip extends React.Component {
  state = {
    score: 0,
+    flipResult: '',
+    guessed: '',
  }

-  guess(guessed) {
+  guess(guessed: string) {
```

```bash
$ git add src
$ git commit -m "flow (flip)"
```

## flow (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth

```bash
$ git add src
$ git commit -m "flow (rest)"
```

[react-url]: https://facebook.github.io/react/
[refactor]: https://en.wikipedia.org/wiki/Code_refactoring
[flow-url]: https://flow.org/
[static-type-checking-url]: https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages
