const I18n = require('i18n')
const path = require('path')

const {
    defaultLocale
} = require('./config')

const i18n = {}

I18n.configure({
    locales: ['pt-BR'],
    directory: path.join(__dirname, '/locales'),
    defaultLocale: defaultLocale,
    register: i18n,
    api: {
        '__': 'translate',
        '__n': 'translateN'
    }
})


exports = i18n