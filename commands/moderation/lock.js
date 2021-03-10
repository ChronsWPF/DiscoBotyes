const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lock",
    category: "moderation",
    run: async (client, message, args) => {
       if(message.member.hasPermission("MANAGE_CHANNELS")) {
message.channel.send(":unlock: Successfully Locked This Channel!").then((sentMessage) => sentMessage.edit(":lock: Successfully Locked This Channel!"))
message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
  SEND_MESSAGES: false
});
} else {
message.channel.send(":x:  |  You do not have permission!")
.then(message => message.delete({ timeout: 4000 }))
}
}
}