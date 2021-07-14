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
            if (commandName === 'ban' || commandName === 'userInfo') 
                command.execute(message, client)
            else
                command.execute(message)

            message.delete()
        } catch (error) {
            console.log(error)
            message.reply(i18n.__('onMessageError'))
        }
    })
}