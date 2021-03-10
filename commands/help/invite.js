const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Invite link for the bot!`)
    .setDescription(`:tada: [CLICK HERE TO INVITE THE BOT](https://discord.com/api/oauth2/authorize?client_id=817155140338319402&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`Bot made by RealChronics#0420`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}