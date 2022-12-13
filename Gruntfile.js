const sass = require('sass');

module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require("time-grunt")(grunt);

  // Automatically load required Grunt tasks
  require("jit-grunt")(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    sass: {
      options: {
          implementation: sass
      },
      dist: {
          files: {
              'src/css/Styles.css': 'src/css/Styles.scss'
          },
      },
    },
    watch: {
      files: "css/*.scss",
      tasks: ["sass"],
    },
  });

  grunt.registerTask("css", ["sass"]);

  grunt.registerTask("default", ["watch"]);
};