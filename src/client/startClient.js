const {
    botToken
} = require('../config')
const {onceReady} = require('./events/onceReady')
const {onceDisconnecting} = require('./events/onceDisconnecting')
const {onceReconnecting} = require('./events/onceReconnecting')
const {onMessage} = require('./events/onMessage')

exports.startClient = client => {

    onceReady(client)
    onceDisconnecting(client)
    onceReconnecting(client)
    onMessage(client)

    client.login(botToken)
}