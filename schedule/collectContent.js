const config = require('../config/index');
const cheerio = require('cheerio');
const { fetch } = require('../tool/fetch');
const schedule = require('./index');
const utils = require('../tool/utils');

/**
 *
 * @param bot
 * @returns {Promise<void>}
 */
module.exports = async function collectContent(bot) {
  schedule.setSchedule(config.COLLOECT_DATE, async () => {
    if (!utils.judgeIsJob()) {
      return false;
    }
    try {
      const str = await collectUserContent();
      // let str = `工作内容:${userContentList.toString()}`;
      const room = await bot.Room.find({ id: config.ROOM });
      room.say(str);
    } catch (e) {
      console.log('error:', e.message);
    }
  });
};

/**
 * 汇总数据
 */
async function collectUserContent() {
  let str = '';
  for (let user of config.ALL_USER_LIST) {
    const url = `${config.WIKI_URL}${user.id}`;
    const res = await fetch(url);
    let $ = cheerio.load(res.text);
    // const data = $('.wiki-content .p1').text();
    str += `\n ${user.name} \n`;
    $('.wiki-content p').each(function (i, e) {
      let text = $(e).text();
      if (text !== '\xa0') {
        str += ` ${text} \n`;
      }
    });
    $('.wiki-content .p1pkss0x').each(function (i, e) {
      let html = $(e).children();
      if (html.length === 0) {
        let text = $(e).text();
        if (text !== '\xa0') {
          str += ` ${text} \n`;
        }
      }
    });
    $('.wiki-content .pd7nslm').each(function (i, e) {
      let html = $(e).children();
      if (html.length === 1) {
        let text = $(e).text();
        if (text !== '\xa0') {
          str += ` ${text} \n`;
        }
      }
    });
  }
  return str;
}
