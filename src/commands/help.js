const {getCommandFiles} = require('../util/getCommandFiles')
const config = require('../config');
const i18n = require('../i18n')

module.exports = {
	name: 'help',
	description: 'Uma lista dos comandos do bot',
	icon: ':robot:',
	execute(message) {
		let str = '';
		const commandFiles = getCommandFiles()

		str += `:robot: Aqui está a lista de comandos do bot :punch:\n\n`

		for (const file of commandFiles) {
			const command = require(`./${file}`)
			str += `> **${config.prefix}${command.name}** \n${command.description} ${command.icon} \n\n`
		}

		message.channel.send(str)
	},
}
