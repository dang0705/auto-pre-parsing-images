import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    exports: "default",
    formats: ["es"],
    plugins: [terser(), commonjs()],
  },
};
