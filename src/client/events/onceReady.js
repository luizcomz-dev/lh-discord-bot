const i18n = require('i18n')
exports.onceReady = (client) => {
    client.once('ready', () => {
        console.log('Pronto! O bot está conectado.')
    })
}