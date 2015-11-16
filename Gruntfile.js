module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Configuration of 'grunt-contrib-clean' task, to remove all output folder
    clean: {
      build: ['output/'],
      dist: ['*.jar']
    },

    // Configuration of 'grunt-contrib-copy' task, to move files into the output folder
    copy: {
      dist: {
        files: [
          { expand: true, cwd: 'input/', dest: 'output/', src: 'assets/**/*' },
          { expand: true, cwd: 'input/templates/partials/', dest: 'output/templates/', src: '**/*.hbs' },
          { expand: true, cwd: 'locales/', dest: 'output/locales', src: '**/*.yaml' }
        ]
      },
      pages: {
        files: [
          { expand: true, cwd: 'input/', dest: 'output/', src: 'templates/*.hbs' }
        ]
      }
    },

    // Configuration of 'grunt-compile-handlebars' task, to compile Handlebars files and JSON into HTML
    'compile-handlebars': {
      dist: {
        files: [{
            expand: true,
            cwd: 'output/templates',
            src: '*.hbs',
            dest: 'output/',
            ext: '.html'
        }],
        templateData: '*.json', // compile-handlebars uses the template folder no matter what
        partials: 'input/templates/partials/**/*.hbs',
        helpers: 'input/templates/helpers/**/*.js'
      }
    },

    // Configuration of 'grunt-maven-tasks' task, to generate the webjar and then install locally or deploy to bintray
    maven: {
      options: {
        type: "jar",
        groupId: 'com.lauraluiz',
        artifactId: "<%= pkg.name %>",
        version: "<%= pkg.version %>",
        destFolder: "/META-INF/resources/webjars",
        gitpush: true,
        mode: "patch"
      },
      install : {
        options : {
          goal: "install"
        },
        files: [
          { expand: true, cwd: 'output/assets/', src: "**/*", filter: "isFile" },
          { expand: true, cwd: 'output/', src: "templates/**/*.hbs", filter: "isFile" },
          { expand: true, cwd: 'output/', src: "locales/**/*", filter: "isFile" }
        ]
      }
    },

    // Configuration of the 'i18next' task, to support internationalization in Handlebars
    i18n: {
      options: {
        preload: ['de', 'en'],
        lng: 'en',
        fallbackLng: 'en',
        ns: {
          namespaces: ['messages'],
          defaultNs: 'messages'
        }
      }
    },

    // Configuration of 'json-refs' task, to resolve JSON references
    'json-refs': {
      dist: {
        files: [{
          expand: true,
          cwd: 'input/templates',
          src: '*.json',
          dest: 'output/templates',
          ext: '.json'
        }]
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-maven-tasks');

  grunt.registerTask('default', ['build', 'release']);
  grunt.registerTask('build', ['clean', 'pre-handlebars', 'handlebars', 'copy:dist']);
  grunt.registerTask('release', ['build', 'maven:install', 'clean:dist']);

  grunt.registerTask('pre-handlebars', 'Tasks to be run before Handlebars', function() {
    grunt.task.run('json-refs');
    grunt.task.run('i18n');
    grunt.task.run('copy:pages');
  });

  grunt.registerTask('handlebars', 'Compiles Handlebars templates using JSON data', function() {
    grunt.task.requires('pre-handlebars');
    grunt.task.run('compile-handlebars');
  });

};