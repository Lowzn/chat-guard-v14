const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    let kanal = message.mentions.channels.first()
    if(!kanal) return message.reply({content: "Bir kanal etiketle!"})
    
    
    
  message.reply("Log kanalı başarıyla ayarlandı!")
  
    db.set(`log_${message.guild.id}`, kanal.id)
    
  

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "log"
};
