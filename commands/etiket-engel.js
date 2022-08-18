const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
    
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    let log = db.fetch(`log_${message.guild.id}`) 
    if (!log) return message.reply("Log kanalı ayarlanmamış!")
    let etiket = args[0]
  if (!etiket) return message.reply("Lütfen etiketin yasaklanacağı kullanıcı ID girin!")
  message.channel.send("Başarılı!")

db.set(`etiketengel_${message.guild.id}`, etiket)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "etiket-engel"
};
