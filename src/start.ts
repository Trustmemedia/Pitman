import { createStart } from "@tanstack/start-client-core";

// Minimal start entry required by TanStack Start.
// Replace with your actual start configuration when the source files are restored.

export const startInstance = createStart({
  getOptions() {
    return {
      serializationAdapters: [],
      defaultSsr: false,
    };
  },
});
