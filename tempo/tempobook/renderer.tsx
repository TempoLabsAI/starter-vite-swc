/* eslint-disable */
// @ts-nocheck
"use client";

/* tempobook-config
{
  "version": "v20260207",
  "entries": [
    {
      "filePath": "/Users/peter/dev/starter-vite-swc/src/canvas/ButtonDefault.tsx",
      "name": "ButtonDefault",
      "type": "component",
      "exportKind": "default",
      "registryKey": "starter-vite-swc/src/canvas/ButtonDefault.tsx"
    },
    {
      "filePath": "/Users/peter/dev/starter-vite-swc/src/canvas/ButtonDestructive.tsx",
      "name": "ButtonDestructive",
      "type": "component",
      "exportKind": "default",
      "registryKey": "starter-vite-swc/src/canvas/ButtonDestructive.tsx"
    },
    {
      "filePath": "/Users/peter/dev/starter-vite-swc/src/canvas/ButtonOutline.tsx",
      "name": "ButtonOutline",
      "type": "component",
      "exportKind": "default",
      "registryKey": "starter-vite-swc/src/canvas/ButtonOutline.tsx"
    }
  ]
}
*/ // tempobook-config

import React, { Suspense } from "react";
const ButtonDefault_swjb2l = React.lazy(() =>
  import("@starter-vite-swc/src/canvas/ButtonDefault.tsx").then((mod) => ({ default: mod.default })),
);
const ButtonDestructive_jzw0zw = React.lazy(() =>
  import("@starter-vite-swc/src/canvas/ButtonDestructive.tsx").then((mod) => ({ default: mod.default })),
);
const ButtonOutline_55hyyq = React.lazy(() =>
  import("@starter-vite-swc/src/canvas/ButtonOutline.tsx").then((mod) => ({ default: mod.default })),
);

type RegistryEntry = {
  component: React.ComponentType<any>;
};

const COMPONENT_REGISTRY: Record<string, RegistryEntry> = {
  "starter-vite-swc/src/canvas/ButtonDefault.tsx": {
    component: ButtonDefault_swjb2l,
  },
  "starter-vite-swc/src/canvas/ButtonDestructive.tsx": {
    component: ButtonDestructive_jzw0zw,
  },
  "starter-vite-swc/src/canvas/ButtonOutline.tsx": {
    component: ButtonOutline_55hyyq,
  }
};

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown render error";
    return { hasError: true, error: message };
  }

  render() {
    if (this.state.hasError) {
      return <div>Failed to render component: {this.state.error}</div>;
    }
    return this.props.children;
  }
}

function parseStoryArgsFromQuery(): Record<string, unknown> {
  if (typeof window === "undefined") {
    return {};
  }

  const argsParam = new URLSearchParams(window.location.search).get("args");
  if (!argsParam) {
    return {};
  }

  try {
    const parsed = JSON.parse(argsParam);
    if (parsed && typeof parsed === "object") {
      return parsed as Record<string, unknown>;
    }
    return {};
  } catch {
    return {};
  }
}

function normalizeQueryRegistryPath(queryPath: string): string {
  const decoded = decodeURIComponent(queryPath).replace(/\/$/, "");
  if (decoded.length === 0) {
    return "";
  }

  // Preserve absolute filesystem keys (e.g. /Users/... or C:/...) and /@fs paths.
  if (decoded.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(decoded)) {
    return decoded;
  }

  return decoded.replace(/^\/+/, "");
}

function getRegistryKeyFromPathname(): string {
  if (typeof window === "undefined") {
    return "";
  }

  const queryPath = new URLSearchParams(window.location.search).get("path");
  if (queryPath && queryPath.length > 0) {
    const normalizedQueryPath = normalizeQueryRegistryPath(queryPath);
    if (normalizedQueryPath.length > 0) {
      return normalizedQueryPath;
    }
  }

  const pathname = window.location.pathname ?? "";
  const withoutLeadingSlash = pathname.replace(/^\/+/, "");
  const withoutTrailingSlash = withoutLeadingSlash.replace(/\/$/, "");
  return decodeURIComponent(withoutTrailingSlash);
}

export default function Renderer() {
  if (typeof window === "undefined") {
    return <div />;
  }

  const registryKey = getRegistryKeyFromPathname();
  const storyArgs = parseStoryArgsFromQuery();
  const entry =
    COMPONENT_REGISTRY[registryKey] ??
    COMPONENT_REGISTRY[registryKey.replace(/^\/+/, "")] ??
    (!registryKey.startsWith("/") ? COMPONENT_REGISTRY[`/${registryKey}`] : undefined);

  if (!entry) {
    return <div>Component not found: {registryKey || "(root)"}</div>;
  }

  const Component = entry.component;
  return (
    <ErrorBoundary key={registryKey}>
      <Suspense fallback={<div />}>
        <Component {...storyArgs} />
      </Suspense>
    </ErrorBoundary>
  );
}
