const i18n = require('../i18n')

module.exports = {
	name: 'clear',
	description: i18n.__('commandClearDescription'),
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id)

		if (!message.member.voice.channel) 
			return message.channel.send(i18n.__('commandErrorsNotInVoiceChannel'))

		serverQueue.songs = []
		serverQueue.connection.dispatcher.end()

		message.channel.send(':ok_hand:')
	},
}