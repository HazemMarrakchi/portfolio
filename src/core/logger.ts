type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogEntry {
  level: LogLevel
  msg: string
  data?: unknown
  time: number
}

const isDev = import.meta.env.DEV

const queue: LogEntry[] = []
let flushScheduled = false

function flush(): void {
  for (const entry of queue) {
    const line = `[portfolio] ${entry.level.toUpperCase()} ${entry.msg}`
    if (entry.level === 'error') console.error(line, entry.data ?? '')
    else if (entry.level === 'warn') console.warn(line, entry.data ?? '')
    else console.log(line, entry.data ?? '')
  }
  queue.length = 0
  flushScheduled = false
}

function log(level: LogLevel, msg: string, data?: unknown): void {
  if (!isDev && level !== 'warn' && level !== 'error') return
  queue.push({ level, msg, data, time: Date.now() })
  if (!flushScheduled) {
    flushScheduled = true
    setTimeout(flush, 0)
  }
}

export const logger = {
  debug: (msg: string, data?: unknown) => log('debug', msg, data),
  info: (msg: string, data?: unknown) => log('info', msg, data),
  warn: (msg: string, data?: unknown) => log('warn', msg, data),
  error: (msg: string, data?: unknown) => log('error', msg, data),
}
