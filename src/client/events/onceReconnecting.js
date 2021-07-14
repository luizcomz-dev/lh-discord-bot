const i18n = require('i18n')

exports.onceReconnecting = client => {
    client.once('reconnecting', () => {
        console.log(i18n.__('onceReconnectingMessage'))
    })
}
