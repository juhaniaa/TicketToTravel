module.exports = function(grunt) {

  // task configurations
  var config = {

    // meta data
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',

    // file-lists
    files: {
      js: {
        vendor: [
          "public/vendor/jquery/dist/jquery.js",
          "public/vendor/bootstrap/dist/js/bootstrap.js",
          "public/vendor/toastr/toastr.js",
          "public/vendor/angular/angular.js",
          "public/vendor/angular-resource/angular-resource.js",
          "public/vendor/angular-route/angular-route.js",
        ],

        app: [
          "public/app/app.js",
          "public/app/account/**/*.js",
          "public/app/common/**/*.js",
          "public/app/main/**/*.js"
        ]
      },
      css: {
        app: [
          "public/vendor/bootstrap/dist/css/bootstrap.css",
          "public/vendor/toastr/toastr.css",
          "public/css/site.css"
        ]
      }
    },

    // configure nodemon
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    clean: {
      workspaces: ["public/dist", "generated"]
    },

    // minify css
    cssmin: {
      minify: {
        src: "<%= files.css.app %>",
        dest: 'public/dist/app.min.css'
      }
    },

    // concatenate files
    concat: {
      dist: {
        dest: "generated/app.min.js",
        src: [
          "<%= files.js.vendor %>",
          "<%= files.js.app %>"
        ]
      }
    },

    // minify files
    uglify: {
      options: {
        banner: "<%= banner %>",
        mangle: false
      },
      dist: {
        dest: "public/dist/<%= pkg.name %>.min.js",
        src: "<%= concat.dist.dest %>"
      }
    }
  };

  // initializing task configuration
  grunt.initConfig(config);

  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-concat-sourcemap');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // creating workflows
  grunt.registerTask('default', ['clean', 'cssmin', 'concat', 'uglify', 'nodemon']);

};
