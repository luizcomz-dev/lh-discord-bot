const Discord = require('discord.js')
const { getCommandFiles } = require('../util/getCommandFiles')
const { getCommandFolder } = require('../util/getCommandFolder')
const i18n = require('i18n')

exports.setClientCommands = (commandMap = new Discord.Collection()) => {
    const commandsFolderName = getCommandFolder()
    const commandFiles = getCommandFiles()

    delete commandFiles

    if (!commandFiles) 
        throw new Error(':robot: A lista de comandos não foi encontrada :cry:')

    for (const file of commandFiles) {
        const command = require(`${commandsFolderName}/${file}`)
        commandMap.set(command.name, command)
    }

    return commandMap
}