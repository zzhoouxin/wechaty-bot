const config = require('../config');
const cheerio = require('cheerio');
const { fetch } = require('../tool/fetch');

/**
 * 个人消息-回复消息
 */
module.exports = async function replyMessage(msg) {
  const contact = msg.from();
  const content = msg.text();

  //如果是领导-就找自己小组里面的人
  if (content === '本组') {
    //找到这个人下面的组成
    const user = config.ALL_USER_LIST.find((item) => {
      return item.key === contact.id;
    });
    //如果有team
    if (user.team) {
    str = await getTeamDaily(user.team);
      msg.say(str);
    } 
  }else if(content === '全部'){
    str = await getAllDaily();
    msg.say(str);
  }else{
    let info = `日报查询仅支持2种，回复【】内文字即可查询~\n`
    config.KEYWORDs.map(v => {
      info += "【" + v + "】" + "\n"
    })
    msg.say(info)
  }
};



/**
 * 获取全部人日报
 */
async function getAllDaily() {
    let str = '';
    for (const user of config.ALL_USER_LIST) {
      let data = await getSingleDaily(user.id);
      str += data;
    }
    return str;
  }



/**
 * 获取小组所有人的日报
 */
async function getTeamDaily(team) {
  console.log('team: ', team);
  let str = '';
  for (const id of team) {
    let data = await getSingleDaily(id);
    str += data;
  }
  return str;
}

/**
 * 获取一个人的日报内容
 */
async function getSingleDaily(id) {
  let str = '';
  //获取接口
  const url = `${config.WIKI_URL}${id}`;
  const res = await fetch(url);
  let $ = cheerio.load(res.text);
  //得到这个人名字
  const userName = config.ALL_USER_LIST.find((user) => user.id === id).name;
  str += `\n ${userName} \n`;
  $('.wiki-content p').each(function (i, e) {
    let text = $(e).text();
    if (text !== '\xa0') {
      str += ` ${text} \n`;
    }
  });
  //建伟的dom
  $('.wiki-content .p1pkss0x').each(function (i, e) {
    let html = $(e).children();
    if (html.length === 0) {
      let text = $(e).text();
      if (text !== '\xa0') {
        str += ` ${text} \n`;
      }
    }
  });
  //庆男的dom
  $('.wiki-content .pd7nslm').each(function (i, e) {
    let html = $(e).children();
    if (html.length === 1) {
      let text = $(e).text();
      if (text !== '\xa0') {
        str += ` ${text} \n`;
      }
    }
  });
  return str;
}
