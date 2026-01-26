import { Log } from "@/types/general";

type LogLevel = "debug" | "info" | "warn" | "error";

const levelOrder: Record<LogLevel, number> = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
};

const envLevel = (process.env.LOG_LEVEL || "info").toLowerCase() as LogLevel;
const currentLevel: LogLevel = levelOrder[envLevel] ? envLevel : "info";

function shouldLog(level: LogLevel) {
  return levelOrder[level] >= levelOrder[currentLevel];
}

function safeMeta(meta?: Record<string, unknown>) {
  if (!meta) return undefined;
  try {
    return JSON.parse(
      JSON.stringify(meta, (_, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );
  } catch {
    return { note: "meta not serializable" };
  }
}

export function serializeError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }
  return { message: String(error) };
}

function log(level: LogLevel, data: Log, meta?: Record<string, unknown>) {
  if (!shouldLog(level)) return;
  const payload = {
    level,
    ...data,
    timestamp: new Date().toISOString(),
    ...safeMeta(meta),
  };
  const line = JSON.stringify(payload);
  if (level === "error") {
    console.error(line);
  } else if (level === "warn") {
    console.warn(line);
  } else {
    console.log(line);
  }
}

export const logger = {
  debug: (data: Log, meta?: Record<string, unknown>) =>
    log("debug", data, meta),
  info: (data: Log, meta?: Record<string, unknown>) =>
    log("info", data, meta),
  warn: (data: Log, meta?: Record<string, unknown>) =>
    log("warn", data, meta),
  error: (data: Log, meta?: Record<string, unknown>) =>
    log("error", data, meta),
};
