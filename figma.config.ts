import type { FigmaConfig, PluginManifest } from "vite-figma-plugin/lib/types";
import { version } from "./package.json";

export const manifest: PluginManifest = {
  name: "Pentaho Figma Plugin",
  id: "pentaho-figma-plugin",
  api: "1.0.0",
  main: "code.js",
  ui: "index.html",
  editorType: ["figma"],
};

export const config: FigmaConfig = {
  manifest,
  version,
  copyZipAssets: ["src/assets/**/*"],
};
