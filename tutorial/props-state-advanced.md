# Advanced Props & State
in this module we'll experiment with advanced state and props functions of [React][react-url]

## TOC
- [set the stage](set-the-stage)
- [refactor auth](refactor-auth)
- [greet user on navbar](greet-user-on-navbar)
- [stats page](stats-page)

## set the stage
```bash
$ git checkout props-state-advanced
```

## refactor auth with props
modify `Auth.jsx`
```diff
+type Props = {
+  name: string,
+  role: string,
+  onLogin: Function,
+  onSignup: Function,
+}
+
 class Auth extends React.Component {
   state = {
-    role: 'guest',
-    name: '',
     nameInput: '',
   }

-  signup() {
-    this.setState({
-      name: this.state.nameInput,
-      role: 'newUser',
-    })
-  }
-
-  login() {
-    this.setState({
-      name: this.state.nameInput,
-      role: 'user',
-    })
-  }
+  props: Props

   renderOutput() {
-    const { role, name } = this.state
+    const { role, name } = this.props

               <div className="col-md-6">
-                <button className="btn btn-primary btn-block" onClick={() => this.signup()}>Signup</button>
+                <button className="btn btn-primary btn-block" onClick={() => this.props.onSignup(this.state.nameInput)}>Signup</button>
               </div>
               <div className="col-md-6">
-                <button className="btn btn-default btn-block" onClick={() => this.login()}>Login</button>
+                <button className="btn btn-default btn-block" onClick={() => this.props.onLogin(this.state.nameInput)}>Login</button>
               </div>
```
make sure auth still works, and commit
```bash
$ git add src
$ git commit -m "refactor auth with props"
```

## greet user on navbar
pass user info from mother to nav on `Mother.jsx`
```diff
-        <Nav />
+        <Nav role={role} name={name} />
```
render greeting message on `Nav.jsx`
```diff
+type Props = {
+  role: string,
+  name: string,
+}
+

-const Nav = () => (
+const Nav = ({ role, name }: Props) => (

+      <div className="navbar-text navbar-right">
+        { role === 'guest' && 'Hello guest!' }
+        { role === 'user' && `Welcome back ${name}` }
+        { role === 'newUser' && `Welcome aboard ${name}` }
+      </div>
     </div>
   </nav>
```

c the change in the browser and commit
```bash
$ git add src
$ git commit -m "greet user on navbar"
```

## stats page
create a stats page the will display the stats from flip, guessnumber, and fizzbuzz app.  
I recommend doing this in the following order:
- create a dummy stats page
- add it to mother as a route
- add a link for it in navbar
- mock stats page's UI with dummy data using `const` in `Stats.jsx`
- move the dummy data to mother's state and pass it to stats page as props
- repeat the process we've done with auth in the last step, to connect each app to mother
c the change in the browser and commit
```bash
$ git add src
$ git commit -m "stats page"
```

[react-url]: https://facebook.github.io/react/
