module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: true,
        useBuiltIns: "usage",
        exclude: ["transform-es2015-template-literals"],
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
