const winston = require('winston')
const {combine, timestamp, printf, json, cli, prettyPrint} = winston.format

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
       json(),
       prettyPrint()
    ),
    transports: [
        new winston.transports.Console({level:'debug'}),
        new winston.transports.File({filename: 'file.log',level:'debug'})
    ]
})

const requestLog = {method: "GET", isAuthenticated: true}
const childLogger = logger.child(requestLog)


childLogger.info('logger info')
// logger.warn('logger warn')
childLogger.error('logger error')
// logger.debug('logger debug')