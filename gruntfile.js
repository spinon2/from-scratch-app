// 
// Develop by GD Team SFO CA. 
// 

module.exports = function(grunt) {
  grunt.initConfig({

      watch:{ // Use watch to check any change in any file down list

          jade: { // check all changes made on Jade Files
            files: ['./jade/*.jade'],
            tasks: ['jade']
          },

          jshint: { // check all changes made on JScript Files
            files: ['./js/*.js'],
            tasks: ['jshint']
          }

      },

      jade:{ // Use this Contrib "Jade" to work HTML Pages
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

      jshint: { // Use this Contrib "JHint" to check all syntax .js files
          all: {
              src: './js/*.js',
          }
      }
  });


  // Load all Task
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Registry Main Default Tasks
  grunt.registerTask('default',['jade','watch']);

  return;

};