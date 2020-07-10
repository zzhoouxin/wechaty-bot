const {Wechaty} = require('wechaty')
const {PuppetPadplus} = require("wechaty-puppet-padplus");
const config = require('./config')
const onScan = require('./bot/onScan')
const onLogin = require('./bot/onLogin')
const onMessage = require('./bot/onMessage')
const onLogout = require('./bot/onLogout')

const bot = new Wechaty({
    puppet: new PuppetPadplus({
        token: config.TOKEN
    }),
    name: "小艾"
});


bot
    .on('scan', onScan)
    .on('login', onLogin(bot))
    .on('logout', onLogout)
    .on('message', onMessage(bot))
    .start()
    .then(() => console.log('开始登陆微信'))
    .catch(e => console.error(e))



