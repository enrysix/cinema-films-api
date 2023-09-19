const logger = require('../services/logger')

/**
 *  API response handler
 * @param {*} fn
 * @returns
 */
exports.handleRes = fn => async (req, res) => {
    try {
        const {data, status} = await fn(req, res)

        printTrace(req, status)

        res.status(status).json(data)
    } catch (err) {
        const response = typeof err?.response?.data == 'object' ? err?.response?.data : {
            msg: err?.response?.data ?? err.message
        }
        const status = err?.response?.status ?? Number('500')

        printTrace(req, status, JSON.stringify(response))

        res.status(status).json(response)
    }
}

/**
 *  Logger controller to print API calls
 * @param {*} param0
 * @param {*} statusCode
 * @param {*} errMsg
 */
const printTrace = ({method, path, query}, statusCode, errMsg) => {
    logger.info(`${method} ${path}${
        Object.keys(query).length
            ? '?' + require('query-string').stringify(query)
            : ''
        } | ${errMsg ? 'ERROR' : 'OK'}: ${statusCode}`
    )

    if (errMsg) {
        if (Number(statusCode) >= Number('400') && Number(statusCode) < Number('500'))
            logger.warn(errMsg)
        else logger.error(errMsg)
    }
}
