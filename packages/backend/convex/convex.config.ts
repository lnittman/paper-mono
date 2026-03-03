import { defineApp } from "convex/server";
import pi from "@lnittman/convex-pi/convex.config";

const app = defineApp();

// Pi agent runtime bridge — sessions, entries, tool executions, usage
app.use(pi);

export default app;
