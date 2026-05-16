export const packageName = "@peezy.tech/patch-moi-harness-fork";

export function greet(name = "world") {
  return `hello from the maintained fork, ${name}`;
}

export function formatGreeting(message, options = {}) {
  return options.shout ? message.toUpperCase() : message;
}

export function buildInfo() {
  return {
    packageName,
    channel: "maintained-fork",
  };
}
