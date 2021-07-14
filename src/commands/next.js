const i18n = require('../i18n')

module.exports = {
    name: 'next',
    description: 'Avança para a próxima faixa',
    icon: ':track_next:',
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id)
        if (!message.member.voice.channel)
            return message.channel.send(
                ':robot: Você precisa estar em um canal de áudio para comandar o bot :bangbang:'
            )
        if (!serverQueue)
            return message.channel.send(
                ':robot: Não há mais itens na lista para serem tocados :blink:'
            )

        serverQueue.connection.dispatcher.end()
    },
}