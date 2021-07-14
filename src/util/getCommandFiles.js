const fs = require('fs')
const { getCommandFolder } = require('./getCommandFolder')

exports.getCommandFiles = function () {
    const commandsFolder = getCommandFolder();

    if (!commandsFolder) throw new Error('A pasta onde se encontram os comandos não foi informada')

    return commandFiles = fs
        .readdirSync(commandsFolder)
        .filter(file => file.endsWith('.js'))
}