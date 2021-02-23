const Discord = require('discord.js')
const Discord = require('discord.js')
const db = require('quick.db')
const kdb = new db.table("kullanici")
const conf  = require('../config.json')
const set = require('../selection/settings.json')
module.exports.run = async(client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok!")

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))

if(!member) return message.channel.send("Sanki Bir Kullanıcıyı Etiketlemeyi Unuttun?").then(x => x.delete({timeout: 5000}));

if(member.id === message.author.id) return message.channel.send('Kendine Vip Rolu Veremezsin Dostum.').then(x => x.delete({timeout: 5000}));

if(member.id === message.guild.OwnerID) return message.channel.send("Sunucu Sahibine Vip Veremzsin Dostum.").then(x => x.delete({timeout: 5000}));

if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("Kullanıcı Senle Aynı Yada Senden Üst Pozisyonda , Bu Durumda Vip Rolunu Veremezsin!").then(x => x.delete({timeout: 5000}));

if(member.roles.cache.has(set.roller.vip) ) {
    return message.channel.send("Bu Kullanıcıda Zaten Vip Rolu Var.")
}
if(!member.roles.add(set.roller.vip) ) {
message.channel.send("Kullanıcıya Başarıyla Vip Rolu Verildi!")}


let hase =`**Kullanıcıya Vip Rolu Verildi** \n Veren Yonetici ${message.author}`
client.channels.cache.get(809502467435397170).send(hase)

}
exports.conf = {
    enabled: true,
    aliases: ['vipver'],
    guildOnly: true,
    permlevel: 0
  };
  
  exports.help = {
      name: 'vip'
  }