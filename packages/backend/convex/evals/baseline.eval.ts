import { Eval } from "braintrust";
import { createPiSessionScorers } from "@lnittman/evals/scorers";

const PROJECT = process.env.BRAINTRUST_PROJECT_NAME ?? "paper";
const piSession = createPiSessionScorers();

Eval(PROJECT, {
  experimentName: "pi-session-baseline",
  data: () => [
    {
      input: "baseline-check",
      metadata: {
        sessions: [{ status: "completed", startedAt: Date.now() - 5000, completedAt: Date.now() }],
        entries: [{ sessionId: "placeholder", entryType: "message", role: "assistant", content: "done" }],
        toolExecutions: [{ status: "success", durationMs: 100, toolName: "placeholder_tool" }],
        usage: [{ tokensIn: 500, tokensOut: 200 }],
      },
    },
  ],
  task: async (input) => input,
  scores: piSession.all(),
});
