const dailyRemind = require('../schedule/dailyRemind')
const remindNoWrite = require('../schedule/remindNoWrite')
const collectContent = require('../schedule/collectContent')


/**
 * 扫码登录
 * @param qrcode
 * @param status
 */
module.exports = bot => {
    return async function onLogin() {
        await dailyRemind(bot);//日常提醒
        // await remindNoWrite(bot);//检查没有写的
        await collectContent(bot);//所有汇总
    }
}
