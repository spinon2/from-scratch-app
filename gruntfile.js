module.exports = function(grunt) {
  grunt.initConfig({

      watch:{

          jade: {
            files: ['./jade/*.jade'],
            tasks: ['jade']
          },

          jshint: {
            files: ['./js/*.js'],
            tasks: ['jshint']
          }

      },

      jade:{
        all:{
          options : {
            pretty : true,
          },

          files: [
            {
              expand : true,
              cwd : './jade/',
              src : '*.jade',
              dest : './jade/',
              ext : '.html'
            }
          ]
        } 
      },

      jshint: {
          all: {
              src: './js/*.js',
          }
      }

  


  });


  
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('default',['jade','watch']);

  return;

};