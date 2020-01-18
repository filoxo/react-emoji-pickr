import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import filesize from "rollup-plugin-filesize";

const prod = process.env.NODE_ENV === "production";

export default {
  input: "src/index.js",
  output: [
    {
      name: "ReactEmojiPickr",
      file: pkg.browser,
      format: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    prod && terser(),
    prod && filesize(),
    !prod && livereload(),
    !prod && serve()
  ]
};
