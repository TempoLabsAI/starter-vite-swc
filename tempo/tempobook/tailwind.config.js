import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const loadConfig = require("tailwindcss/loadConfig");

const sourceConfigPaths = [
  "/Users/peter/dev/starter-vite-swc/tailwind.config.js",
];
const tempobookContentPaths = [
  "/Users/peter/dev/starter-vite-swc/**/*.{js,jsx,ts,tsx,mdx}",
  "/Users/peter/dev/starter-vite-swc/tempo/designs/**/*.{js,jsx,ts,tsx,mdx}",
];

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function mergeDeep(target, source) {
  for (const [key, value] of Object.entries(source ?? {})) {
    if (Array.isArray(value)) {
      const existing = Array.isArray(target[key]) ? target[key] : [];
      target[key] = [...existing, ...value];
      continue;
    }

    if (isPlainObject(value)) {
      const existing = isPlainObject(target[key]) ? target[key] : {};
      target[key] = mergeDeep({ ...existing }, value);
      continue;
    }

    target[key] = value;
  }

  return target;
}

function addUniqueContentEntry(entries, seen, entry) {
  if (typeof entry !== "string" && !isPlainObject(entry)) {
    return;
  }

  const key =
    typeof entry === "string"
      ? `string:${entry}`
      : `object:${JSON.stringify(entry)}`;

  if (seen.has(key)) {
    return;
  }
  seen.add(key);
  entries.push(entry);
}

function toContentEntries(contentValue) {
  if (Array.isArray(contentValue)) {
    return contentValue;
  }

  if (isPlainObject(contentValue) && Array.isArray(contentValue.files)) {
    return contentValue.files;
  }

  return [];
}

const mergedConfig = {};
const mergedContentEntries = [];
const seenContentEntries = new Set();
let mergedContentTemplate = null;

for (const contentPath of tempobookContentPaths) {
  addUniqueContentEntry(mergedContentEntries, seenContentEntries, contentPath);
}

for (const sourceConfigPath of sourceConfigPaths) {
  let sourceConfig = {};
  try {
    sourceConfig = loadConfig(sourceConfigPath) ?? {};
  } catch {
    sourceConfig = {};
  }

  const contentValue = sourceConfig.content;
  if (Array.isArray(contentValue)) {
    if (!mergedContentTemplate) {
      mergedContentTemplate = [];
    }
  } else if (isPlainObject(contentValue)) {
    mergedContentTemplate = {
      ...(isPlainObject(mergedContentTemplate) ? mergedContentTemplate : {}),
      ...contentValue,
    };
  }

  for (const entry of toContentEntries(contentValue)) {
    addUniqueContentEntry(mergedContentEntries, seenContentEntries, entry);
  }

  const { content: _ignoredContent, ...configWithoutContent } =
    isPlainObject(sourceConfig) ? sourceConfig : {};
  mergeDeep(mergedConfig, configWithoutContent);
}

if (Array.isArray(mergedContentTemplate)) {
  mergedConfig.content = mergedContentEntries;
} else if (isPlainObject(mergedContentTemplate)) {
  mergedConfig.content = {
    ...mergedContentTemplate,
    files: mergedContentEntries,
  };
} else {
  mergedConfig.content = mergedContentEntries;
}

if (!Array.isArray(mergedConfig.plugins)) {
  mergedConfig.plugins = [];
}

if (!isPlainObject(mergedConfig.theme)) {
  mergedConfig.theme = {};
}

if (!isPlainObject(mergedConfig.theme.extend)) {
  mergedConfig.theme.extend = {};
}

export default mergedConfig;
