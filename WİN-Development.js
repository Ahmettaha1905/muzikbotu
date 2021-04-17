const dbd = require("dbd.js");
const bot = new dbd.Bot({
  token: "Tokenininiz",
  prefix: "$getServerVar[prefix]"
});

bot.onMessage({
  guildOnly: true //true ise suncuularda sadece false ise dmde de çalışır
});
bot.loadCommands(`./komutlar/`);

bot.musicStartCommand({
  channel: "$channelID",
  code: `
$description[Şuan Çalan Müzik : $songInfo[title]

`
});
bot.musicEndCommand({
  channel: "$channelID",
  code: `$description[Müzik Bitti]
`
});
bot.variables({
  prefix: "!"
});

bot.status({
  text: `WİN Development Müzik Botu Altyapısı dbd.js`,
  type: "PLAYING",
  time: 12
});

bot.command({
  name: "prefix",
  code: `$setServerVar[prefix;$message]
$description[Prefix **$message** Oldu]
$argsCheck[>1;Prefix Ne Olucak]
$onlyPerms[admin;Bunun İçin \`\`\` Yönetici\`\`\` Yetkin Olmalı]`
});
bot.command({
  name: "sesegir",
  aliases: ["join"],
  code: `
$djsEval[message.member.voice.channel.join();]`
});
bot.command({
  name: "sestençık",
  aliases: ["leave", "dc"],
  code: `
$djsEval[message.member.voice.channel.leave();]
 `
}); 
