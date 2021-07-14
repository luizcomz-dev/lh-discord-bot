const i18n = require('../i18n')

module.exports = {
    name: 'next',
    description: i18n.__('commandNextDescription'),
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id)
        if (!message.member.voice.channel)
            return message.channel.send(
                i18n.__('commandErrorsNotInVoiceChannel')
            )
        if (!serverQueue)
            return message.channel.send(
                i18n.__('commandNextEmptyList')
            )

        serverQueue.connection.dispatcher.end()
    },
}