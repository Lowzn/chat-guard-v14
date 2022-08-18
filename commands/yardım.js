const { EmbedBuilder } = require("discord.js");

exports.run = async (client, message, args) => {

  const embed = new EmbedBuilder()
  .setColor("#EB459E")
  .setTitle(`${message.guild.name} | Commands`)
  .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
  .setDescription("`!help`,`!dosya-engel`,`!etiket-engel`,`!everyone-engel`,`!küfür-engel`,`!reklam-engel`,`!log`,`!rol-etiket-engel`") 
  .setFooter({ text: `Asked by ${message.author.tag}.`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })    
  .setTimestamp()  

  return message.reply({ embeds: [embed] })

};
exports.conf = {
  aliases: ["yardım"]
};

exports.help = {
  name: "help"
};