// Generated on 2014-04-04 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var config = require('./package.json');

    // Define the configuration for all the tasks
    grunt.initConfig({


        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist/' + config.name
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9091,
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'app/modules',
                        src: '**/*.html',
                        dest: '<%= yeoman.dist %>/modules'
                    },
                    {
                        expand: true,
                        cwd: 'app/common',
                        src: '**/*.html',
                        dest: '<%= yeoman.dist %>/common'
                    }
                ]
            }
        },

        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                files: [
                    {
                        src: [

                        ],
                        dest: '<%= yeoman.dist %>/styles/styles.css'
                    }
                ]
            },
            generated: {
                files: [
                    {
                        dest: '.tmp/concat/js/app.js',
                        src: [
                            'app/js/app.js',
                            'app/modules/start/startModule.js',
                            'app/modules/hittaKandidater/hittaKandidaterModule.js',
                            'app/common/services/aflocalstorage.js',
                            'app/common/services/matchningskriterierResources.js',
                            'app/common/model/matchningsprofil.js',
                            'app/common/factories/ifyllnadshjalp.js',
                            'app/common/factories/hanteramatchning.js',
                            'app/modules/start/controllers/startController.js',
                            'app/modules/start/controllers/sokController.js',
                            'app/modules/start/controllers/sokLaggTillController.js',
                            'app/modules/start/controllers/forslagController.js',
                            'app/modules/start/controllers/yrkenController.js',
                            'app/modules/start/controllers/kompetenserController.js',
                            'app/modules/start/controllers/detaljeradController.js',
                            'app/modules/start/controllers/flerInstallningarController.js',
                            'app/modules/start/controllers/utbildningarOchKorkortController.js',
                            'app/modules/hittaKandidater/controllers/hittaKandidaterController.js'
                        ]
                    }
                ]
            },
            bower_components_min : {
                files: [
                    {
                        src: [
                            'app/bower_components/jquery/dist/jquery.min.js',
                            'app/bower_components/angular/angular.min.js',
                            'app/bower_components/angular-resource/angular-resource.min.js',
                            'app/bower_components/lodash/dist/lodash.min.js'
                        ],
                        dest: '<%= yeoman.dist %>/generic_components/bower_components.min.js'

                    }
                ]
            },
            bower_components : {
                files: [
                    {
                        src: [
                            'app/bower_components/jquery/dist/jquery.js',
                            'app/bower_components/angular/angular.js',
                            'app/bower_components/angular-resource/angular-resource.js',
                            'app/bower_components/lodash/dist/lodash.js'
                        ],
                        dest: '<%= yeoman.dist %>/generic_components/bower_components.js'

                    }
                ]
            }
        },
        uglify: {
            generated: {
                files: [
                    {
                        dest: '<%= yeoman.dist %>/application_scripts/scripts.min.js',
                        src: ['.tmp/concat/js/angularMerge.js']
                    }
                ]
            }
        },
        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: true,
                debug: true
            },
            jenkins: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },

        jasmine: {
            test: {
                src: '<%= yeoman.app %>/src/**/*.js',
                options: {
                    specs: '<%= yeoman.app %>/test/**/*.spec.js'
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            application: {
                files: {
                    '.tmp/concat/js/angularMerge.js': [
                        'app/js/app.js',
                        '.tmp/constants.js',
                        'app/common/services/PersonService.js',
                        'app/modules/start/controllers/PersonController.js'
                    ]
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    '<%= yeoman.dist %>/styles/styles.min.css': [

                    ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        src: ['app/content/ag/images/*'],
                        dest: '<%= yeoman.dist %>/styles/images',
                        filter: 'isFile',
                        flatten: true
                    },
                    {
                        src: ['app/modules/start/testdata/Persons.json'],
                        dest: '<%= yeoman.dist %>/',
                        expand: true,
                        flatten: true,
                        rename: function (dest, src) {
                            return dest + "/modules/start/testdata/Persons.json";
                        }
                    },
                    {
                        src: ['app/index_tmp.html'],
                        dest: '<%= yeoman.dist %>/',
                        flatten: true,
                        expand: true,
                        rename: function (dest, src) {
                            return dest + 'index.html';
                        }
                    },
                    {
                        src: ['app/bower_components/bootstrap/dist/css/bootstrap.min.css'],
                        dest: '<%= yeoman.dist %>/',
                        expand: true,
                        flatten: true,
                        rename: function (dest, src) {
                            return dest + "/styles/bootstrap.min.css";
                        }
                    }
                ]
            },
            debug: {
                files: [
                    {
                        src: ['.tmp/concat/js/angularMerge.js'],
                        dest: '<%= yeoman.dist %>/application_scripts/',
                        filter: 'isFile',
                        flatten: true,
                        expand: true,
                        rename: function (dest, src) {
                            return dest + 'scripts.js';
                        }
                    },
                    {
                        src: ['app/index_tmp.html'],
                        dest: '<%= yeoman.dist %>/',
                        flatten: true,
                        expand: true,
                        rename: function (dest, src) {
                            return dest + 'index.html';
                        }
                    }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
        grunt.task.run([
            'clean:server',
            'connect:livereload',
            'watch'
        ]);

    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', [
        'karma:jenkins'
    ]);

    grunt.registerTask('devTest', [
        'connect:test',
        'karma:unit',
        'watch'
    ]);

    grunt.registerTask('build', function (target) {

        var mode = grunt.option('mode');
        var prodMode = ['ngAnnotate', 'uglify:generated', 'cssmin', 'htmlmin', 'copy:main', 'concat:bower_components'];
        var devMode = ['ngAnnotate', 'copy:debug', 'concat:dist'];
        if (mode == 'DEBUG') {
            grunt.task.run(devMode);
            prodMode.splice(0, 1);
            grunt.task.run(prodMode);
        } else if (mode == 'PROD') {
            grunt.task.run(prodMode);
        } else {
            grunt.task.run(devMode);
            prodMode.splice(0, 1);
            grunt.task.run(prodMode);
        }

    });

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
