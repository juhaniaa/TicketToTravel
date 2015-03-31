module.exports = function(grunt) {

  // task configurations
  var config = {

    // configure nodemon
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    concat: {
      app: {
        dest: "generated/js/app.min.js",
        src: [
          "public/vendor/jquery/dist/jquery.js",
          "public/vendor/bootstrap/dist/js/bootstrap.js",
          "public/vendor/toastr/toastr.js",
          "public/vendor/angular/angular.js",
          "public/vendor/angular-resource/angular-resource.js",
          "public/vendor/angular-route/angular-route.js",
          "public/app/app.js",
          "public/app/account/**/*.js",
          "public/app/common/**/*.js",
          "public/app/main/**/*.js"
        ]
      }
    }
    // concat: {
    //   options: {
    //     separator: ';'
    //   },
    //   dist: {
    //     src: ['src/**/*.js'],
    //     dest: 'dist/<%= pkg.name %>.js'
    //   }
    // },
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    //   },
    //   dist: {
    //     files: {
    //       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    //     }
    //   }
    // },
  };

  // initializing task configuration
  grunt.initConfig(config);

  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // creating workflows
  grunt.registerTask('default', ['concat', 'nodemon']);

};
