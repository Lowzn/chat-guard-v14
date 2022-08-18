const Discord = require('discord.js')
const db = require("croxydb")

exports.run = async (client ,message, args) =>{
    if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply("yetkin yok")
if(args[0] === 'aktif' || args[0] === "açık" || args[0] === "aç") {
  let log = db.fetch(`log_${message.guild.id}`) 
  if (!log) return message.reply("Log kanalı ayarlanmamış!")
    db.set(`küfürengel_${message.guild.id}`, true)
    message.channel.send('Başarılı Şekilde `Aktif` Edildi.')
  return
}

  message.channel.send('Lütfen aç yaz')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür' , 'küfürfiltresi', 'küfürengel'],
 permLevel: 0
};

exports.help = {
 name: "küfür-engel",
 description: 'Küfür Filtresini açar/kapar',
 usage: '!küfürfiltresi  '
};