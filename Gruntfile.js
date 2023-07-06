module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      less: {
        development: {
          options: {
            paths: ['css']
          },
          files: {
            'css/main.css': 'css/main.less'
          }
        }
      },
  
      watch: {
        styles: {
          files: ['css/*.less', 'modules/*.less'],
          tasks: ['less'],
          options: {
            livereload: true
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['less', 'watch']);
  };