// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/lodash/dist/lodash.underscore.js',
            'test/**/*.js',
            'app/js/app.js',
            'app/common/services/PersonService.js',
            'app/modules/start/controllers/PersonController.js'
        ],

        preprocessors : {
            'app/common/**/!(*Resources).js': 'coverage',
            'app/modules/**/*.js': 'coverage'

        },

        plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage'
        ],

        reporters : ['dots', 'junit', 'coverage'],

        coverageReporter : {
            type : 'cobertura',
            dir : 'reports/',
            file : 'coverage.xml'
        },

        junitReporter : {
            outputFile: 'reports/test-results.xml'
        },

        // list of files / patterns to exclude
        exclude: [],
        // web server port
        port: 9001,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        //logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
