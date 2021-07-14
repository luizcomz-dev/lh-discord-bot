const i18n = require('i18n')

module.exports = {
	name: 'clear',
	description: 'Limpa a lista de reprodução',
	icon: ':stop_button:',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id)

		
		if (!message.member.voice.channel) 
			return message.channel.send(':robot: Você precisa estar em um canal de áudio para comandar o bot :bangbang:')
		
		if (!serverQueue) 
			return message.channel.send(':robot: O bot não possui uma lista de reprodução para limpar :wink:')

		serverQueue.songs = []
		serverQueue.connection.dispatcher.end()

		message.channel.send(':ok_hand:')
	},
}