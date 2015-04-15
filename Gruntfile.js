module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: ['style/*.less'],
                tasks: ['clean', 'less', 'cssmin', 'cachebreaker'],
                options: {
                    spawn: false
                }
            }
        },

        clean: {
            mincss: [
                'sites/all/themes/aolrise/style/css/styles.min.css',
                'sites/all/themes/aolrise/style/css/styles.css'
            ]
        },

        less: {
            development: {
                options: {
                    paths: ["style"]
                },
                files: {
                    "style/styles.css": "style/styles.less"
                }
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'style',
                src: ['*.css', '!*.min.css'],
                dest: 'style',
                ext: '.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean', 'less', 'cssmin']);
};
