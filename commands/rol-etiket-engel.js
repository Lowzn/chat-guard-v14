const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
    
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    let log = db.fetch(`log_${message.guild.id}`) 
    if (!log) return message.reply("Log kanalı ayarlanmamış!")
    let rol = message.mentions.roles.first()
    if (!rol) return message.reply("Lütfen bir rol etiketle")
    db.set(`roletiket_${message.guild.id}`, rol.id)
    message.reply("Başarıyla belirttiğin role etiket engel açıldı!")

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "rol-etiket-engel"
};
