const i18n = require('../i18n')

module.exports = {
	name: 'nowplaying',
	description: 'Exibe a fila de reprodução do bot',
	icon: ':musical_note:',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);

		if (!serverQueue)
			return message.channel.send(':robot: Não há nada para tocar. :man_shrugging:');

		return message.channel.send(`${serverQueue.songs[0].title}`);
	},
};