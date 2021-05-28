import pkg from "./package.json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import htmlTemplate from "rollup-plugin-generate-html-template";
import postcss from "rollup-plugin-postcss";
import filesize from "rollup-plugin-filesize";

const prod = process.env.NODE_ENV === "production";

export default [
  {
    input: "src/index.js",
    output: [
      {
        name: "ReactEmojiPickr",
        file: pkg.browser,
        format: "umd",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      {
        file: pkg.module,
        format: "es",
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      commonjs(),
      postcss({
        plugins: [],
        extract: true,
      }),
      prod && terser(),
      prod && filesize(),
      // !prod && livereload(),
      // !prod && serve()
    ],
  },
  {
    input: "demo/src/index.js",
    output: {
      file: "demo/index.js",
      format: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    external: ["react", "react-dom"],
    plugins: [
      nodeResolve({
        moduleDirectories: ["dist"],
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      htmlTemplate({
        template: "demo/src/index.html",
        target: "demo/index.html",
      }),
      postcss(),
      !prod && serve("demo"),
      !prod && livereload(["dist", "demo"]),
    ],
  },
];
