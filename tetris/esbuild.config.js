import esbuild from "esbuild";
import postcssPlugin from "@chialab/esbuild-plugin-postcss";

esbuild
  .build({
    entryPoints: ["./src/main.ts"],
    bundle: true,
    outfile: "./dist/main.js",
    minify: true,
    sourcemap: true,
    target: ["es6"],
    plugins: [
      postcssPlugin(),
    ],
    watch: process.env.NODE_ENV === "development",
  })
  .then(() => {
    console.log("Build successful!");
  })
  .catch(() => process.exit(1));
