import { createFileRoute, Router } from "@tanstack/react-router";

// Minimal router entry required by TanStack Start.
// Replace with your actual routes when the source files are restored.

export const rootRoute = createFileRoute({
  path: "/",
  component: () => null,
});

export const router = new Router({
  routeTree: rootRoute,
});

export function getRouter() {
  return Promise.resolve(router);
}
