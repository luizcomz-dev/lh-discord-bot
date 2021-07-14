const i18n = require('../i18n')

module.exports = {
    name: 'resume',
    description: i18n.__('commandResumeDescription'),
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id)

        if (!message.member.voice.channel)
            return message.channel.send(
                i18n.__('commandErrorsNotInVoiceChannel')
            )

        if (!serverQueue)
            return message.channel.send(
                i18n.__('commandResumeNotSoundToResume')
            )

        if (!serverQueue.connection.dispatcher.paused)
            return message.channel.send(
                i18n.__('commandResumeAlreadyResumed')
            )

        serverQueue.connection.dispatcher.resume()
    },
}