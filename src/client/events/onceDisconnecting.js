const i18n = require('i18n')
exports.onceDisconnecting = client => {
    client.once('disconnecting', () => {
        console.log('O bot foi desconectado.')
    })
}