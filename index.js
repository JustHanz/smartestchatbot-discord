const { Client } = require("discord.js");
const client = new Client({ intents: 513 });
const _0x1801=['bot\x20created\x20by\x20han#9122','log','smartestchatbot','if\x20there\x20anybug\x20contact\x20me','Client','config','dotenv'];function _0x2ca7(_0x5a56d8,_0x1801c4){_0x5a56d8=_0x5a56d8-0x100;let _0x2ca74a=_0x1801[_0x5a56d8];return _0x2ca74a;}const _0x5f94e1=_0x2ca7,smartestchatbot=require(_0x5f94e1(0x102)),x=new smartestchatbot[(_0x5f94e1(0x104))]();require(_0x5f94e1(0x106))[_0x5f94e1(0x105)](),client['on']('ready',()=>{const _0x10545b=_0x5f94e1;console[_0x10545b(0x101)](_0x10545b(0x100)),console[_0x10545b(0x101)](_0x10545b(0x103)),console['log']('Enjoy');});

client.on("ready", () => {
    console.log(`${client.user.tag}`);
    setInterval(function() {
        client.user.setActivity(`Artificial Intelligence`, { type: 'WATCHING'}).catch(console.error);
        //.addField("Player online", `${response.online}/${response.maxplayers}`) || ${bot.guilds.cache.size} server! and ${bot.users.cache.size} Members!
		
	},180000)
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.id != process.env.CH) return;
    //if (message.content === "test") return message.inlineReply(`yo`)
    if (!message.content) return;
        x.chat({ message: message.content, name: client.user.username, owner: "kosong", user: message.author.id, language: `en`})
        .then(reply => {
            message.reply(reply)
        }).catch(e => {console.log(e);});   
    //}
});
client.login(process.env.BOT_TOKEN);