const i18n = require('i18n')

exports.onceReconnecting = client => {
    client.once('reconnecting', () => {
        console.log('O bot está reconectando.')
    })
}
