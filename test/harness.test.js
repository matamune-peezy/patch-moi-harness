import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { buildInfo, formatGreeting, greet, packageName } from "../src/index.js";

describe("patch-moi-harness", () => {
  it("greets the requested name", () => {
    assert.equal(greet("patch.moi"), "hello from the maintained fork, patch.moi");
  });

  it("reports maintained fork build metadata", () => {
    assert.deepEqual(buildInfo(), {
      packageName,
      channel: "maintained-fork",
    });
  });

  it("can format a greeting for noisy release smoke tests", () => {
    assert.equal(formatGreeting(greet("release"), { shout: true }), "HELLO FROM THE MAINTAINED FORK, RELEASE");
  });
});
