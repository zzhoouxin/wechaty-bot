const schedule = require('./index');
const config = require('../config');
const utils = require('../tool/utils')
module.exports =async  function dailyRemind(bot) {

    schedule.setSchedule(config.WITHDRAWA_DATE, async () => {
        if(!utils.judgeIsJob()){
           return false;
        }
       try {
           //提醒组内人发送日报
           const all  = await bot.Room.findAll();
           const searchRoom = await bot.Room.find({ id: config.ROOM});
           // let contact = await bot.Contact.find({ name: config.NICKNAME }) || await bot.Contact.find({ alias: config.NAME })
           await searchRoom.announce("快下班了~大佬们可以更新一下日报啦~/:@)")
       } catch (e) {
           console.log("error:",e.message);
       }
   });

}



