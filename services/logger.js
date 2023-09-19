const { logLevel } = require('../config').getParams()
const logLevels = ['debug','info', 'warn', 'error']

/**
 * Prints log if loglevel reached
 * @param {*} message
 * @param {*} level
 */
const log = (message, level) => {
    if (logLevels.indexOf(level) >= logLevels.indexOf(logLevel.toLowerCase()))
        console.log(`[${level.toUpperCase()}] ${message}`)
}

/**
 * log level methods
 * @param {*} msg
 * @returns
 */
exports.debug = msg => log(msg, 'debug')
exports.info = msg => log(msg, 'info')
exports.warn = msg => log(msg, 'warn')
exports.error = msg => log(msg, 'error')