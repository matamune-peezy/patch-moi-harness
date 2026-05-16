#!/usr/bin/env node
import { formatGreeting, greet } from "../src/index.js";

const args = process.argv.slice(2);
const shout = args.includes("--shout");
const name = args.find((arg) => !arg.startsWith("-")) ?? "world";

console.log(formatGreeting(greet(name), { shout }));
