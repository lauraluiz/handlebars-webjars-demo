# Handlebars-WebJars Demo

Simple Handlebars-based template released as WebJars.

Based on: https://github.com/sphereio/commercetools-sunrise-theme

##Installation

- Install [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/)
- Install [Grunt](http://gruntjs.com/getting-started)
- Run `npm install` in the project root to install the project dependencies

##How to use

You can import the theme to your project as a [WebJars](http://www.webjars.org/) dependency.

##How to develop

[Fork](https://help.github.com/articles/fork-a-repo/) or [copy](https://help.github.com/articles/duplicating-a-repository/) the project and adapt `package.json` to create your own theme.

Set it up as explained in the _[Installation](#installation)_ section, then apply your modifications as follows:

1. Run `grunt`
2. Modify the source files located in `input/` folder
3. Check your changes by accessing the desired HTML file generated in the `output/` folder
4. Once ready, enable the theme in your Sunrise project following one of the methods described in _[Create WebJars file](#create-webjars-file)_

###Commands

Besides `grunt`, which builds the whole generated site (`grunt build`) and watches for changes, there are other commands available. Below are listed a non-exhaustive list of them.

Notice you can always add `--verbose` and/or `--debug` to any command in order to obtain more information.

#### Generate HTML Site

Build the site for your theme and access the HTML files to see how it looks like. 

- `grunt build` to build the whole generated site

- `grunt build-images` to build only images

- `grunt build-assets` to build only CSS, JS and font files

- `grunt build-templates` to build only i18n and HBS files, besides generating the HTML files from the Handlebars templates and the JSON data

Building the generated site also performs these tasks:
- Compresses any PNG, JPG, GIF and SVG image file with [Imagemin](https://github.com/imagemin/imagemin)

#### Create WebJars File

Create a WebJars file from this theme and apply it to any Sunrise project. There are three possible ways to achieve this:

- `grunt webjars` to create the WebJars file in the root directory of the project, so that you can apply it by placing the generated JAR file in the folder for unmanaged dependencies of your Sunrise project (i.e. `lib/` is the default folder for Sunrise)

- `grunt install` to install the current snapshot version to your local maven repository (`~/.m2/repository/io/commercetools/sunrise/commercetools-sunrise-theme`) and apply it to your project as a dependency from a local environment
