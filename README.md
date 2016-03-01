# Handlebars-WebJars Demo

Simple Handlebars-based template released as WebJars.

Based on: https://github.com/sphereio/commercetools-sunrise-theme

###Installation

- Install [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/)
- Install [Grunt](http://gruntjs.com/getting-started)
- Run `npm install` in the project root to install the project dependencies.

###Usage

#####Useful commands

`grunt` to execute the tasks `build` and `release`

`grunt build` to build the generated site

`grunt release` to install to local maven repository (~/.m2/repository/com/lauraluiz/handlebars-webjars-demo)

Notice you can always add `--verbose` and/or `--debug` to any command in order to obtain more information.

#####Generated site

Once the project is built, the generated site is located in the `output/` folder.

#####Executed tasks

`grunt clean`
  - Removes the `output/` folder with the generated site
  - Removes the generated JAR file

`grunt json-refs`
  - Resolves all JSON References found in files in `input/templates/` and creates a fully resolved equivalent in `output/templates/`

`grunt handlebars`
  - Generates HTML files from the Handlebars templates and JSON data defined in `input/templates/` and the partial templates defined in `input/templates/partials/` into `output/`

`grunt copy`
  - Copy any asset in `input/assets/` to `output/assets/`
  - Copy any Handlebars template in `input/templates/` to `output/templates/` (it flattens any directory)
  - Copy any internationalization file from `locales/` to `output/locales/`  
