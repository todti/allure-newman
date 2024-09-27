exports.config = {
  name: "l",
  tests: "./specs/*.spec.js",
  output: "./output",
  plugins: {
    allure: {
      outputDir: "./allure-results",
      require: "allure-codeceptjs",
    },
  },
};
