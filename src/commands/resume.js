const i18n = require('../i18n')

module.exports = {
    name: 'resume',
    description: 'Continua a exeução da lista',
    icon: ':play_pause:',
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id)

        if (!message.member.voice.channel)
            return message.channel.send(
                ':robot: Você precisa estar em um canal de áudio para comandar o bot :bangbang:'
            )

        if (!serverQueue)
            return message.channel.send(
                ':robot: O bot não encontrou uma playlist parada para continuar sua execução :cry:'
            )

        if (!serverQueue.connection.dispatcher.paused)
            return message.channel.send(
                ':robot: A lista já foi reiniciada :blink:'
            )

        serverQueue.connection.dispatcher.resume()
    },
}