### How to use

It doesn’t have any dependencies on purpose. If you’re looking for it, you
should already have grunt and jasmine-node.

By default it will run `jasmine-node --captureExceptions --matchall test` and you can override the
command line args in `grunt.initConfig`:

    grunt.initConfig({
      'jasmine-node': {
        args: '--captureExceptions --matchall spec'
      }
    });

    grunt.loadNpmTasks('grunt-jasmine-node-light');


