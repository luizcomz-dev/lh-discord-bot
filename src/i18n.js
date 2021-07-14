const i18n = require('i18n')
const path = require('path')

const {
    defaultLocale
} = require('./config')

i18n.configure({
    locales: ['pt-BR'],
    directory: path.join(__dirname, '/locales'),
    defaultLocale: defaultLocale,
    register: global
})

i18n.init()

module.exports = i18n