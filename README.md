### How to use

It doesn’t have any dependencies on purpose. If you’re looking for it, you
should already have grunt and jasmine-node.

By default it will run `jasmine-node --matchall test` and you can override the
command line args in `grunt.initConfig`:

    grunt.initConfig({
      'jasmine-node': {
        args: ''
      }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine-node-light');

### Tests

I don’t know how to test this kind of code. Open for advice.
