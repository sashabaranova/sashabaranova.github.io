

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 50
          },{
            width: 1600,
            suffix: '_large_1x',
            quality: 25
          },{
            width: 800,
            suffix: '_medium_2x',
            quality: 60
          },{
            width: 800,
            suffix: '_medium_1x',
            quality: 40
          }]
        },

        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'images/',
          dest: 'images/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
