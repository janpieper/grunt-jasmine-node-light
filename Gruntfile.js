'use strict';

module.exports = function(grunt) {
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['jasmine-node']);
};
