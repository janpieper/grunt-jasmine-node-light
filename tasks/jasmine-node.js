'use strict';

module.exports = function(grunt) {

  grunt.registerTask('jasmine-node', '', function() {
    var exec = require('child_process').exec,
        done = this.async();

    grunt.config.requires('jasmine-node.args');

    var args = grunt.config('jasmine-node.args');
    var jasmine = exec('jasmine-node ' + args, function (error) {
      if (error !== null) console.log('Error: ' + error);
    });

    jasmine.stdout.on('data', output);
    jasmine.stderr.on('data', output);
    jasmine.on('exit', function(code) { done(code === 0); });

  });

  function output(data) {
    process.stdout.write(data);
  }

};
