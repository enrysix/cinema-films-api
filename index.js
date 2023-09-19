const { port } = require('./config/local').getParams()
const { App } = require('./app')

/* Run server */
App.listen(port, () => require('./services/logger').info(`Server listening on port ${port}`))