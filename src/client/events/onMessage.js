const i18n = require('i18n')
const {
    prefix
} = require('../../config')

exports.onMessage = client => {
    client.on('message', async message => {
        if (message.author.bot) return
        if (!message.content.startsWith(prefix)) return


        const prefixLength = prefix.length
        const regSplit = / +/
        const args = message.content.slice(prefixLength).split(regSplit)
        const commandName = args.shift().toLocaleLowerCase()

        const command = client.commands.get(commandName)


        try {
            if (!command)
                throw new Error(`:robot: Ops..! Não encontrei o comando ${commandName} :cry:`)

            if (commandName === 'ban' || commandName === 'userInfo')
                command.execute(message, client)
            else
                command.execute(message)

        } catch (error) {
            console.log(error)
            message.reply(error.message || ':robot: Ops..! O bot não conseguiu rodar o comando! :cry:')
        }
    })
}