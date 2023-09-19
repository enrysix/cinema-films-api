const { baseUrl, apiKey } = require('../config').getParams()

/**
 * Defines axios instance of API
 */
 const api = require('axios').create({
    baseURL: baseUrl,
    timeout: 30000
})

// Parses HTTP request path with api key
const getPath = (path) => path.replace('/api', '') + `?api_key=${apiKey}`


/**
 *  Proxies methods call to API
 * @param {*} param0
 * @param {*} _res
 * @returns api response
 */
 exports.get = ({ path, headers }, _res) => api.get(getPath(path), headers)

 exports.post = ({ path, headers, body }, _res) => api.post(getPath(path, query), body, headers)
 
 exports.put = ({ path, headers, body }, _res) => api.put(getPath(path, query), body, headers)
 
 exports.patch = ({ path, headers, body }, _res) => api.patch(getPath(path, query), body, headers)
 
 exports.delete = ({ path, headers }, _res) => api.delete(getPath(path, query), headers)
