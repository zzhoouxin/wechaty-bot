// 监听对话
const { Message } = require("wechaty")
const config = require('../config');
const cheerio = require('cheerio');
const {fetch} = require('../tool/fetch');
const replyMessage = require("../message/reply")


module.exports = bot => {
    return async function onMessage(msg) {
        const contact = msg.from(); // 发消息人
        const content = msg.text(); //消息内容
        const room = msg.room(); //是否是群消息
        if (msg.self()) {
            return;
        }
        //如果是文本消息
        if(msg.type() == Message.Type.Text){
        // await textJ(bot);
        if (room) {
            console.log("room===>",room)
            // 如果是群消息
            const topic = await room.topic();
            console.log(`群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`);
        } else {
            // const all = await room.memberAll();
            // const all  = await bot.Room.findAll();
            // console.log('all: ', all);
            // const room = await bot.Room.find({ id: "18808881464@chatroom"}); //找到前端群
            // const allUser = await room.memberAll();
            // console.log('allUser: ', allUser);

            // console.log('room: ', room);
            await replyMessage(msg);
            // 如果非群消息
            // console.log(`发消息人: ${contact.name()} 消息内容: ${content}`);
        }
    }
    }
}

// testRoomList = async (bot)=>{
//     const room = await bot.Room.find({ id: config.ROOM});
//     const all = await room.memberAll();
//     const singleUser = all.find((item)=>{
//         return item.id ==='wxid_x56dv06l9mq212';
//     })
//     room.say("nihaoya",singleUser)
// }

textJ = async (bot)=>{
    // const all  = await bot.Room.findAll();
    // let contact = await bot.Contact.find({ name: config.NICKNAME }) || await bot.Contact.find({ alias: config.NAME })
    // console.log("all====>",all,",length===>",all.length,",contact===>",contact)
    // await contact.say("你好呀") // 发送消息

}



