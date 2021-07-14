const { Client, Collection } = require('discord.js')
const { disabledEvents } = require('../config')

class BotClient extends Client {
    constructor(config) {
        super({
            disableEveryone: true,
            disabledEvents: disabledEvents
        })

        this.commands = new Collection()
        this.queue = new Map()
        this.config = config
    }
}

module.exports = BotClient