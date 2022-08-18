const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  let log = db.fetch(`log_${message.guild.id}`) 
  if (!log) return message.reply("Log kanalı ayarlanmamış!")
  let kanal = message.mentions.channels.first()
    if(!kanal) return message.reply({content: "Bir kanal etiketle!"})
    
    
    
  message.reply("Dosya atma sistemi başarıyla belirtilen kanalda aktifleştirildi!")
  
    db.set(`dosyaengel_${message.channel.id}`, kanal.id)
    
  

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "dosya-engel"
};
