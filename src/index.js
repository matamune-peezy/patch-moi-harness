export const packageName = "@peezy.tech/patch-moi-harness";

export function greet(name = "world") {
  return `hello from the maintained fork, ${name}`;
}

export function buildInfo() {
  return {
    packageName,
    channel: "maintained-fork",
  };
}
