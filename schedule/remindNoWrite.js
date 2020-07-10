const config = require('../config/index');
const cheerio = require('cheerio');
const {fetch} = require('../tool/fetch');
const schedule = require('./index');
const utils = require('../tool/utils')
const allMonth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];


/**
 * 发送今日未写日报的人
 * @param bot
 * @returns {Promise<void>}
 */
module.exports = async function remindNoWrite(bot) {
    schedule.setSchedule(config.WITHDRAWA_DATE, async () => {
        if(!utils.judgeIsJob()){
            return false;
        }
        try {
            const NoWriteUserList = await getNoWriteUserList();
            let str = `今日没写日报人:${NoWriteUserList.toString()}`;
            const room = await bot.Room.find({id: config.ROOM});
            room.say(str)
        } catch (e) {
            console.log("error:", e.message);
        }
    });

}

/**
 * 获取没写日报的人
 */
async function getNoWriteUserList() {
    let noWriteUserList = [];
    //今日日期信息
    const nowTimeStr = findNowTimeStr();
    for (let user of config.ALL_USER_LIST) {
        const url = `${config.WIKI_URL}${user.id}`;
        const res = await fetch(url);
        let $ = cheerio.load(res.text);
        //用户的时间信息
        const userTimeStr = $('.page-metadata-modification-info')
            .text()
            .replace(/\s/g, '');
            console.log('userTimeStr: ', userTimeStr);
        if (!userTimeStr.includes(nowTimeStr)) {
            noWriteUserList.push(user.name);
        }
    }

    return noWriteUserList;
}

/**
 * 得到今日日期格式
 */
function findNowTimeStr() {
    const now = new Date();
    const month = now.getMonth();
        date = now.getDate();
    const updateTimeStr = `${allMonth[month]}${date <10 ? "0"+date :date}`;
    return updateTimeStr;
}

