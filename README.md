# grunt-webpack-explore
This is a demonstration of integrating the Grunt and Webpack build systems. It is based on [grunt-webpack](https://github.com/webpack/grunt-webpack) and relies on it as a dependency.

# Getting Started
To build/run this repo, you will need NodeJS via Homebrew (`brew install node`) or [nodejs.org](https://nodejs.org/en/). Then install the Grunt CLI via `npm i -g grunt-cli`.

Next, run the following:

```bash
$ git clone https://github.com/simpulton/grunt-webpack-explore.git
$ cd grunt-webpack-explore
$ npm i
$ grunt webpack-dev-server # builds and serves your app
```

> **NOTE:** if you are getting `UNMET PEER DEPENDENCY` errors, you need to manually install webpack, webpack-dev-server, and any other `peerDependencies` listed in `package.json`.

Finally, point your browser to [localhost:8080](http://localhost:8080) to view the app.

> **NOTE:** if you want to *just build* the app, you can run `grunt webpack` to write `bundle.js` to the `build/` directory in your project folder.
