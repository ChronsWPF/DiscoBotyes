const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unlock",
    category: "moderation",
    run: async (client, message, args) => {
       if(message.member.hasPermission("MANAGE_CHANNELS")) {
message.channel.send(":lock: Successfully Unlocked This Channel!").then((sentMessage) => sentMessage.edit(":unlock: Successfully Unlocked This Channel!"))
message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
  SEND_MESSAGES: true
});
 
} else {
message.channel.send(":x:  |  You do not have permission!")
.then(message => message.delete({ timeout: 6000 }))
}
}
}