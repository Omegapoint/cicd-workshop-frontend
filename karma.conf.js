var webpackConfig = require("./webpack.config");

module.exports = function (config) {
  config.set({
               autoWatch: true,
               browsers: ["PhantomJS"],
               files: ["test/**/*.spec.jsx", "test/**/*.spec.jsx"],
               frameworks: ["mocha", "chai"],
               plugins: ["karma-*"],
               preprocessors: {
                 "test/**/*.spec.js": ["webpack"],
                 "test/**/*.spec.jsx": ["webpack"]
               },
               reporters: ["mocha"],
               singleRun: false,
               webpack: {module: webpackConfig.module}
             });
};
