'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    'jasmine-node': {
      'args': '--matchall test'
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['jasmine-node']);

};
