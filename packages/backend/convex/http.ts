/**
 * HTTP router — mounts Pi bridge endpoints for agent runtime ↔ Convex.
 * Auth: Bearer token via BRIDGE_TOKEN env var.
 */

import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { Pi, createBridgeHandlers } from "@lnittman/convex-pi";
import { components } from "./_generated/api";

const pi = new Pi(components.pi);

const { createPiBridgeRoutes } = createBridgeHandlers(pi, httpAction, {
  bridgeToken: process.env.BRIDGE_TOKEN,
});

const http = httpRouter();

// Pi bridge endpoints: /pi/session, /pi/status, /pi/entry, /pi/tool, /pi/usage, /pi/ack
createPiBridgeRoutes(http);

export default http;
