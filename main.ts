// The Funniest Sick-Day Excuse — make.fun entry
// A tiny program that prints exactly one line: a sick-day excuse a boss
// might half believe and a coworker would laugh at, under 200 characters.
// The joke is built from three parts so the twist lands at the end:
// a believable household emergency, an absurd escalation, and a
// straight-faced sign-off in a real person's voice.

const MAX_CHARS = 200;

type ExcuseParts = {
  setup: string; // the half-believable bit: a real household emergency
  twist: string; // the absurd escalation, funniest word near the end
  signoff: string; // the day-off ask, typed like a normal message
};

// Drafted for the brief: fresh idea (no fever, no dog, no dead
// grandmother), one read, every word doing work.
const excuse: ExcuseParts = {
  setup: "The plumber said don't flush anything until Thursday,",
  twist: "so my bathroom has declared independence",
  signoff: "and I'm its ambassador today.",
};

function buildLine(parts: ExcuseParts): string {
  return [parts.setup, parts.twist, parts.signoff].join(" ");
}

function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("empty line");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`line is ${line.length} chars, must be at most ${MAX_CHARS}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("line is only whitespace");
  }
}

const line = buildLine(excuse);
validate(line);
console.log(line);
