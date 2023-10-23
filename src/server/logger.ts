import winston from "winston"

const { format, transports, createLogger } = winston
const winstonConsole = new transports.Console()
const customFormat = format.printf(info => {
  const { level, message, timestamp, stack } = info
  const logMessage = `${timestamp} [${level}] : ${stack? message : "\n    " + message}`
  const logStack = stack ? `\n${stack}` : ""
  return `${logMessage} ${logStack}`
})

const logger = createLogger(
  {
    format: format.combine(
      format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      format.errors({ stack: true }),
      customFormat,
      format.colorize({ all: true }),
      format.align()
    ), 
    transports: [
      winstonConsole, 
    ]
  }
)
export { logger }
