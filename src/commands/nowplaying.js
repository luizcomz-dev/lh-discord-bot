const i18n = require('../i18n')

module.exports = {
	name: 'nowplaying',
	description: i18n.__('commandNowPlayingDescription'),
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);

		if (!serverQueue)
			return message.channel.send(i18n.__('commandNowPlayingNothingToPlay'));

		return message.channel.send(`${serverQueue.songs[0].title}`);
	},
};