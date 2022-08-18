const db = require('croxydb')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('Hey Bu Ayarı Kullanabilmek için `aç` yada `kapat` yazmalısın!')
  if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    let log = db.fetch(`log_${message.guild.id}`) 
    if (!log) return message.reply("Log kanalı ayarlanmamış!")
    db.set(`reklam_${message.guild.id}`, 'acik')
      message.channel.send('Reklam Engel başarıyla açıldı! ')
    
  }
  if (args[0] == 'kapat') {
    let log = db.fetch(`log_${message.guild.id}`) 
    if (!log) return message.reply("Log kanalı ayarlanmamış!")
    db.set(`reklam_${message.guild.id}`, 'kapali')
      message.channel.send('Reklam Engel başarıyla kapatıldı! Artık herkes reklam yapabilir.')
    
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reklam-engel',
  description: '[Admin Komutu]',
  usage: 'reklam-engelle'
};