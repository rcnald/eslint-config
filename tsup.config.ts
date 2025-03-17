import { defineConfig } from "tsup"

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/base.ts", "./src/node.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
})
