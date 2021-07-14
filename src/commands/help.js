const {getCommandFiles} = require('../util/getCommandFiles')
const config = require('../config');
const i18n = require('../i18n')

module.exports = {
	name: 'help',
	description: i18n.__('commandHelpDescription'),
	execute(message) {
		let str = '';
		const commandFiles = getCommandFiles()

		str += `${i18n.__('commandHelpStartMessage')}\n\n`

		for (const file of commandFiles) {
			const command = require(`./${file}`)
			str += `-> ${config.prefix}${command.name} \n${command.description} \n\n`
		}

		message.channel.send(str)
	},
}
