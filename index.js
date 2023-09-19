const { port } = require('./config').getParams()
const { App } = require('./app')

/* Run server */
App.listen(port, () => require('./services/logger').info(`Server listening on port ${port}`))