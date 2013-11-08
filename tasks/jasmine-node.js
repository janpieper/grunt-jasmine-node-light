'use strict';

module.exports = function(grunt) {
  grunt.registerTask('jasmine-node', '', function() {
    var exec = require('child_process').exec,
        done = this.async();

    var defaultArgs = '--captureExceptions --matchall test',
        args = grunt.config('jasmine-node.args') || defaultArgs;

    var jasmine = exec('jasmine-node ' + args, function (error) {
      if (error !== null) console.log('Error: ' + error);
    });

    jasmine.stdout.pipe(process.stdout);
    jasmine.stderr.pipe(process.stdout);
    jasmine.on('exit', function(code) { done(code === 0); });

  });

};
