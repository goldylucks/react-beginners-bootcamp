# React Bootcamp

[![Build Status][travis-image]][travis-url] [![Code Analysis][code-analysis-image]][code-analysis-url] [![dependencies][dependencies-image]][dependencies-url] [![devDependencies][dev-dependencies-image]][dev-dependencies-url] [![GPLv3][license-image]][license-url]

[![React](/img/react-padded-90.png)](https://facebook.github.io/react/)
[![Redux](/img/redux-padded-90.png)](http://redux.js.org/)
[![React Router](/img/react-router-padded-90.png)](https://github.com/ReactTraining/react-router)
[![Flow](/img/flow-padded-90.png)](https://flowtype.org/)
[![ESLint](/img/eslint-padded-90.png)](http://eslint.org/)
[![Jest](/img/jest-padded-90.png)](https://facebook.github.io/jest/)
[![Yarn](/img/yarn-padded-90.png)](https://yarnpkg.com/)
[![Webpack](/img/webpack-padded-90.png)](https://webpack.github.io/)
[![Bootstrap](/img/bootstrap-padded-90.png)](http://getbootstrap.com/)

Welcome apprentice warrior!

## TOC
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Verify](#verify)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
### Signup for
- [github](http://github.com/)
- [bithound](https://www.bithound.io/)
- [heroku](https://www.heroku.com/)
- [travis CI](https://travis-ci.org/)

### Install on your machine
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [latest chrome](https://www.google.com/chrome/browser/features.html)
- [chrome react devtools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [node](https://nodejs.org/en/download/)
- [npm](https://docs.npmjs.com/getting-started/installing-node)
- [yarn](https://yarnpkg.com/lang/en/docs/install/)
- [sublime](https://www.sublimetext.com/3)
- [sublime package control](https://packagecontrol.io/installation#st3)
- sublime packages: [babel](https://github.com/babel/babel-sublime) [stylefmt](https://github.com/dmnsgn/sublime-stylefmt) [eslint](https://github.com/roadhump/SublimeLinter-eslint) [stylelint](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint) [gitgutter](https://github.com/jisaacks/GitGutter) [jsonlint](https://github.com/SublimeLinter/SublimeLinter-json) [synced side bar](https://github.com/TheSpyder/SyncedSideBar) [flow](https://github.com/SublimeLinter/SublimeLinter-flow)  
NOTE: you can use any code editor / IDE you wish, as long as it has eslint, stylelint, and flow working

## Setup
- fork the [repo][repo-url] (and star it for good karma)
- open terminal and run ...
```bash
$ git clone git@github.com:YOUR_GITHUB_USERNAME/react-beginners-bootcamp.git
$ cd react-beginners-bootcamp
$ yarn
$ yarn start # starts express server on port 8000
# on another terminal
$ yarn:wds # starts webpack-dev-server on port 7000
```

## Verify
checkout the verify branch: `$ git checkout branch verify-setup`
#### development
- open chrome at `http://localhost:8000`
- make sure you see the lovely welcoming message :)
- go to `src/client/index.jsx`
- change something inside the `<h1>` tag
- make sure browser refreshes with the changes WITHOUT you doing anything
- delete line 18 `//flow-disable-next-line` and make sure you see a warning in your editor. Undo the delete.
- delete line 20 `// eslint-disable-next-line global-require` and make sure you see a warning in your editor. Undo the delete.
#### production
- run `$ yarn prod:build && yarn prod:start` in terminal
- open chrome at `http://localhost:8001`
- make sure you see the (still lovely) production message
- go to `src/client/index.jsx` and change something inside the `<h1>` tag
- make sure the browser does NOT refresh with the changes

## Contributing
[issues][issues-url], [features requests][issues-url], and [PRs][pr-url] are always always welcomed! :)

## License
Code for this bootcamp is available under the [GPL v3 license][license-url]

[repo-url]: https://github.com/goldylucks/react-beginners-bootcamp
[issues-url]: https://github.com/goldylucks/react-beginners-bootcamp/issues
[pr-url]: https://github.com/goldylucks/react-beginners-bootcamp/pull

[travis-image]: https://travis-ci.org/goldylucks/react-beginners-bootcamp.svg?branch=master
[travis-url]: https://travis-ci.org/goldylucks/react-beginners-bootcamp

[dependencies-image]: https://img.shields.io/bithound/dependencies/github/goldylucks/react-beginners-bootcamp.svg
[dependencies-url]: https://www.bithound.io/github/goldylucks/react-beginners-bootcamp/master/dependencies/npm

[dev-dependencies-image]: https://img.shields.io/bithound/devDependencies/github/goldylucks/react-beginners-bootcamp.svg
[dev-dependencies-url]: https://www.bithound.io/github/goldylucks/react-beginners-bootcamp/master/dependencies/npm

[code-analysis-image]: https://www.bithound.io/github/goldylucks/react-beginners-bootcamp/badges/code.svg
[code-analysis-url]: https://www.bithound.io/github/goldylucks/react-beginners-bootcamp

[license-image]: https://img.shields.io/badge/license-GPL%20v3-brightgreen.svg
[license-url]: http://www.gnu.org/licenses/gpl-3.0.en.html
