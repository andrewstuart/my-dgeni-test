module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('docs', function() {
    var done = this.async();
    var Dgeni = require('dgeni');
    var dgeni = new Dgeni([require('./config')]);
    return dgeni.generate().catch(function(err) {
      console.log(err);
      process.exit(1);
    }).finally(function() {
      done();
    });
  });

  // Default task
  grunt.registerTask('default', ['docs']);
};
