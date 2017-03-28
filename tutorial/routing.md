# Routing
in this module we'll cover the basics of [React][react-url] routing by combining our 3 apps to one mother app.

## TOC
- [set the stage](set-the-stage)
- [scaffolding mother and the router](scaffolding-mother-and-the-router)
- [add routes (flip)](add-routes-(flip))
- [add routes (rest)](add-routes-(rest))

## set the stage
```bash
$ git checkout routing
```

## scaffolding mother and the router
create the Mother app with a dummy route
src/client/Mother.jsx
```jsx
// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

const Mother = () => (
  <div>
    <Switch>
      <Route exact path="/" component={() => <h1>Home is wherever there is you</h1>} />
    </Switch>
  </div>
)

export default Mother

```
add the entry point to mother app in `src/client/index.html`
```diff
<div id="welcome-app"></div>
+<div id="mother-app"></div>
<div id="flip-app"></div>
```
add router support to the render method, and render mother at `src/client/client.jsx`
```diff
+import { BrowserRouter } from 'react-router-dom'

const render = (AppComponent, appname) => {
  ReactDOM.render(
-    <AppComponent />,
+    <BrowserRouter>
+      <AppComponent />
+    </BrowserRouter>,
    document.querySelector(`#${appname}-app`),
  )
}

render(Welcome, 'welcome')
render(Mother, 'mother')
render(Flip, 'flip')

+if (module.hot) {
+  // flow-disable-next-line
+  module.hot.accept('./Mother', () => {
+    // eslint-disable-next-line global-require
+    const nextMother = require('./Mother').default
+    render(nextMother, 'mother')
+  })
+}
```
c the lovely message from our mother? ;)
commit the changes
```
$ git add src
$ git commit -m "scaffolding mother and the router"
```
## add route (flip)
create the navbar at `src/client/Navbar.jsx`
```jsx
// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/flip">Flip</NavLink></li>
      </ul>
    </div>
  </nav>
)

export default Nav

```
modify `src/client/Mother.jsx`
```diff
+import Flip from './Flip'

<div>
+  <Nav />
  <Switch>
    <Route exact path="/" component={() => <h1>Mother knows best dear</h1>} />
+    <Route path="/flip" component={Flip} />
```
remove the rendering off the apps from `src/client/client.jsx`
```diff
-import Flip from './Flip'
-import Guessnumber from './Guessnumber'
-import Fizzbuzz from './Fizzbuzz'
-import Auth from './Auth'

-render(Flip, 'flip')
-render(Guessnumber, 'guessnumber')
-render(Fizzbuzz, 'fizzbuzz')
-render(Auth, 'auth')

-if (module.hot) {
-  // flow-disable-next-line
-  module.hot.accept('./Flip', () => {
-    // eslint-disable-next-line global-require
-    const nextFlip = require('./Flip').default
-    render(nextFlip, 'flip')
-  })
-}
-
-if (module.hot) {
-  // flow-disable-next-line
-  module.hot.accept('./Guessnumber', () => {
-    // eslint-disable-next-line global-require
-    const nextGuessnumber = require('./Guessnumber').default
-    render(nextGuessnumber, 'guessnumber')
-  })
-}
-
-if (module.hot) {
  -  // flow-disable-next-line
  -  module.hot.accept('./Fizzbuzz', () => {
    -    // eslint-disable-next-line global-require
    -    const nextFizzbuzz = require('./Fizzbuzz').default
    -    render(nextFizzbuzz, 'fizzbuzz')
    -  })
    -}
-
-if (module.hot) {
-  // flow-disable-next-line
-  module.hot.accept('./Auth', () => {
-    // eslint-disable-next-line global-require
-    const nextAuth = require('./Auth').default
-    render(nextAuth, 'auth')
-  })
-}
```
c the changes in the browser and commit
```
$ git add src
$ git commit -m "add routes (flip)"
```
## add routes (rest)
Repeat the process for the rest of the apps, in the following order, one app at a time:
- guessnumber
- fizzbuzz
- auth
c the changes in the browser and commit
```
$ git add src
$ git commit -m "add routes (rest)"
```
