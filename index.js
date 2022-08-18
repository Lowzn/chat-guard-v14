const { Client, GatewayIntentBits, Partials } = require("discord.js");
const config = require("./config.js");
const db = require("croxydb")
const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(config.token || process.env.TOKEN)

client.on("messageCreate", async (message) => {
  let kanal = db.fetch(`dosyaengel_${message.channel.id}`) 
  let log = db.fetch(`log_${message.guild.id}`) 
 
  if (message.channel.id === kanal) {
    if (message.attachments.size >= 1) {
      message.delete();
      message.channel.send("Bu kanalda dosya engel sistemi etkin!")
      client.channels.cache.get(log).send("<@"+message.author+">"+ " Adlı Kullanıcı "+ "<#"+kanal+">"+ " Kanalında Dosya Atmaya Çalıştı!")
    }
  }
});
client.on("messageCreate", async msg => { 
  const yasak = db.fetch(`etiketengel_${msg.guild.id}`)
  const kelime = ["<@"+yasak+">"]; 
  if (kelime.some(some => msg.content.includes(some))) {
    msg.delete()
  msg.channel.send("Bu kullanıcıyı etiketlemek bu sunucu yasaklanmış!")
  let log = db.fetch(`log_${msg.guild.id}`) 
  client.channels.cache.get(log).send(`<@${msg.author.id}> Adlı Kullanıcı ${yasak} IDli Kullanıcısını Etiketlemeye Çalıştı!`)
 
  }}) 
  client.on("messageCreate", async message => { 
    const ananınamı = db.fetch(`roletiket_${message.guild.id}`)
    if (message.content.toLowerCase() === `<@&${ananınamı}>` || message.content.toLowerCase() === `<@&${ananınamı}>` || message.content.toLowerCase() === `<@&${ananınamı}>`) {
    message.delete()
    message.channel.send(`${message.author}, bu rolü etiketleyemezsin.`)
    let log = db.fetch(`log_${message.guild.id}`) 
    client.channels.cache.get(log).send(`${message.author.tag} Adlı Kullanıcı ${ananınamı} IDli Rolü Etiketlemeye Çalıştı!`)
    }

  })
  client.on('messageCreate', msg => {
    const filtre = db.fetch(`everengel_${msg.guild.id}`)
       if (filtre) {
           const etiket = ["@everyone", "@here",];
           let kelimeler = msg.content.split(' ');
           kelimeler.forEach(kelime=> {
            if(etiket.some(küfür => küfür === kelime))  {
                     msg.delete();  
                     let log = db.fetch(`log_${msg.guild.id}`) 
    client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı everyone atmaya çalıştı`)
                         return msg.channel.send('Bu Sunucuda ever engel açık!').then(msg => console.log());
                     
                        }
                      })
                  }
                 }) 
                 client.on('messageCreate', msg => {
                  const filtre = db.fetch(`küfürengel_${msg.guild.id}`)
                     if (filtre) {
                         const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
                         let kelimeler = msg.content.split(' ');
                         kelimeler.forEach(kelime=> {
                          if(kufurler.some(küfür => küfür === kelime))  {
                                   msg.delete();  
                                   let log = db.fetch(`log_${msg.guild.id}`) 
                                   client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı Küfür Etmeye Çalıştı!`)
                                       return msg.channel.send('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => console.log());
                                   
                                      }
                                    })
                                }
                               }) 
   client.on("messageUpdate", (oldMessage, newMessage, msg) => {
     
     
    const filtre = db.fetch(`küfürengel_${newMessage.guild.id}`)
       if (filtre) {
           const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
           let kelimeler = newMessage.content.split(' ');
           kelimeler.forEach(kelime=> {
            if(kufurler.some(küfür => küfür === kelime))  {
        
             
              newMessage.delete();
              let log = db.fetch(`log_${msg.guild.id}`) 
              client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı mesajını düzenleyerek küfür çalıştı`) 
                         return newMessage.channel.send('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => console.log());
                        
             
             }
           })
       }
      }) 
     
      client.on("messageCreate", msg => {
       let i = db.fetch(`reklam_${msg.guild.id}`)
          if (i == 'acik') {
              const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
              if (reklam.some(word => msg.content.includes(word))) {
                
                        msg.delete();
                        let log = db.fetch(`log_${msg.guild.id}`) 
                        client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı Reklam Yapmaya Çalıştı`)
                          return msg.channel.send('**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**').then(msg => console.log);
          

                }
              }
          })
        
       
            
          
         
       