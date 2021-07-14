const Discord = require('discord.js')
const BotClient = require('./src/client')
const path = require('path')
const {
    setClientCommands
} = require('./src/client/setClientCommands')
const {
    startClient
} = require('./src/client/startClient')

const client = new BotClient()
client.commands = new Discord.Collection()

client.commands = setClientCommands(client.commands)

startClient(client)