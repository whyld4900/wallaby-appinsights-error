"use strict";

var wallabyWebpack = require("wallaby-webpack");
var webpackPostprocessor = wallabyWebpack(
  {
    node: {
      setImmediate: false,
      dgram: "empty",
      fs: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty",
    },
  },
  { setupFiles: ["./test/setup.js"] }
);

module.exports = function (wallaby) {
  return {
    files: [{ pattern: "src/**/*.js", load: false }],

    tests: [{ pattern: "test/**/*.spec.js", load: false }],

    env: {
      kind: "electron",
    },

    compilers: {
      "**/*.js": wallaby.compilers.babel(),
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    },
  };
};
