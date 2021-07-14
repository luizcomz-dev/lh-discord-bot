const i18n = require('i18n')
exports.onceReady = (client) => {
    client.once('ready', () => {
        console.log(i18n.__('onceReadyMessage'))
    })
}