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

    // concatenate files
    concat_sourcemap: {
      options: {
        sourcesContent:true
      },
      app: {
        dest: "public/dist/app.min.js",
        src: [
          "<%= files.js.vendor %>",
          "<%= files.js.app %>"
        ]
      }
    },

    // minify files
    uglify: {
      options: {
        banner: "<%= banner %>"
      },
      dist: {
        sourceMapIn: "public/dist/js/app.min.js.map",
        sourceMap: "public/dist/js/app.min.js.map",
        dest: "public/dist/<%= pkg.name %>.min.js",
        src: "<%= concat_sourcemap.app.dest %>"
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

  // creating workflows
  grunt.registerTask('default', ['clean', 'concat_sourcemap', 'uglify', 'nodemon']);

};
