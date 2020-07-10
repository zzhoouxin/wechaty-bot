// const { getNoWriteUserList } = require('../superagent');
// const Qrterminal = require("qrcode-terminal")
// const config = require('../config');
// const schedule = require('../schedule');
// const onScan =  require('./onScan');
// // 延时函数，防止检测出类似机器人行为操作
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//
// // 登录
// async function onLogin(bot) {
//   console.log(`微信已经登录了`);
//   // // 登陆后创建定时任务
//   await initDay(bot);
// }
//
//
//
//
// // 创建微信每日说定时任务
// // async function initDay(bot) {
// //   console.log(`已经设定每日提醒任务`);
// //
// //   schedule.setSchedule(config.WITHDRAWA_DATE, async () => {
// //     let logMsg;
// //     // let contact =
// //     //   (await bot.Contact.find({ name: config.NICKNAME })) ||
// //     //   (await bot.Contact.find({ alias: config.NAME })); // 获取你要发送的联系人
// //     // const NoWriteUserList = await getNoWriteUserList();
// //     // let str = `今日没写日报人:${NoWriteUserList.toString()}`;
// //     try {
// //       // logMsg = str;
// //       await delay(2000);
// //       // await contact.say(str); // 发送消息
// //       //艾特所有人看看
// //       const searchRoom = await bot.Room.find({ id: config.ROOM});
// //       await searchRoom.announce("各位大佬们,快下班了~大家更新下日报吧/:@)")
// //
// //         const searchUser1 = await searchRoom.member({roomAlias :"你猜我叫什么"});
// //       //   const searchUser = await searchRoom.member({ name:"百果园nj景明佳园店13357810137"});
// //       //   const searchUser2 = await searchRoom.member({ name:"Sail小助手"});
// //       //   const searchUser3 = await searchRoom.member({ name:"圈子"});
// //       //   const newList = [searchUser,searchUser1,searchUser2,searchUser3]
// //         searchRoom.say("大佬们日报更新下呗~",searchUser1)
// //     } catch (e) {
// //       logMsg = e.message;
// //     }
// //     // console.log(logMsg);
// //   });
// // }
//
//
//
//
//
//
//
//
//
//
// module.exports = {
//   onMessage,
//   onLogout,
//   onLogin,
//   onScan,
// };
