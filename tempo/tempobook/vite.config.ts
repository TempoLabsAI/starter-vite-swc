import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// -- CommonJS Shims --
import __cjs_mod__ from 'node:module';
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
const require = __cjs_mod__.createRequire(import.meta.url);
function tempoSourceResolver() {
  const sourceRoots = ["/Users/peter/dev/starter-vite-swc"];
  const perRepoAliases = {
    "/Users/peter/dev/starter-vite-swc": [["@", "/Users/peter/dev/starter-vite-swc/src"]]
  };

  // Resolve real paths for alias roots at init time to handle bind mounts /
  // hard-linked directories where the same directory is reachable via multiple
  // mount points (e.g. /Users/x/dev/repo and /Users/x/projects/repo).
  const { realpathSync } = require("node:fs");
  const resolvedPerRepoAliases = Object.entries(perRepoAliases).map(([root, aliases]) => {
    let realRoot = root;
    try { realRoot = realpathSync(root).replace(/\\/g, "/"); } catch {}
    return [realRoot, aliases];
  });

  function resolvePerRepoAlias(source, importer) {
    if (!importer) return null;
    let realImporter = importer;
    try { realImporter = realpathSync(importer).replace(/\\/g, "/"); } catch {}
    for (const [root, aliases] of resolvedPerRepoAliases) {
      if (!realImporter.startsWith(root + "/") && realImporter !== root) continue;
      for (const [alias, target] of aliases) {
        if (source === alias) return target;
        if (source.startsWith(alias + "/")) {
          return target + source.slice(alias.length);
        }
      }
    }
    return null;
  }

  return {
    name: "tempobook-source-resolver",
    enforce: "pre",
    async resolveId(source, importer, options) {
      if (!source || source[0] === "\0") {
        return null;
      }
      if (options?.custom?.["tempobook-source-resolver"]) {
        return null;
      }

      const aliasResolved = resolvePerRepoAlias(source, importer);
      if (aliasResolved) {
        // Re-resolve through Vite so extension and index-file resolution works
        // (e.g. "@/lib/utils" → "/abs/src/lib/utils" → "/abs/src/lib/utils.ts").
        const resolved = await this.resolve(aliasResolved, importer, {
          skipSelf: true,
          custom: { "tempobook-source-resolver": true },
        });
        return resolved ?? aliasResolved;
      }

      if (source[0] === "." || source[0] === "/") {
        return null;
      }

      for (const root of sourceRoots) {
        try {
          const result = await this.resolve(source, root + "/package.json", {
            skipSelf: true,
            custom: { "tempobook-source-resolver": true },
          });
          if (result && !result.external) {
            return result;
          }
        } catch {
          // Try next source root.
        }
      }

      return null;
    },
  };
}

export default defineConfig({
  plugins: [react(), tempoSourceResolver()],
  resolve: {
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    alias: {
      "@": "/Users/peter/dev/starter-vite-swc/src",
      "@starter-vite-swc": "/Users/peter/dev/starter-vite-swc",
      "starter-vite-swc": "/Users/peter/dev/starter-vite-swc",
    },
  },
  server: {
    host: "127.0.0.1",
    strictPort: true,
    warmup: {
      clientFiles: [
        "./main.tsx",
        "./renderer.tsx",
      ],
    },
    fs: {
      allow: [
        "/Users/peter/dev/starter-vite-swc",
        "/Users/peter/dev/starter-vite-swc/tempo/designs",
        "/Users/peter/dev/starter-vite-swc/tempo/tempobook",
      ],
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-dev-runtime", "react/jsx-runtime"],
  },
});
