const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",

    message.channel.send('Analisando....').then(m => {

  let ping = Math.round(client.ws.ping) + `ms`
  let Latência = m.createdTimestamp - message.createdTimestamp 

  var milliseconds = parseInt((client.uptime % 1000) / 100),
    seconds = parseInt((client.uptime / 1000) % 60),
    minutes = parseInt((client.uptime / (1000 * 60)) % 60),
    hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24),
    days = Math.floor(client.uptime / 86400000);

    let uptime = days + " dias, " + hours + " horas, " + minutes + " minutos e " + seconds + " segundos!"


  let embed = new Discord.MessageEmbed()
      .setTitle(`🏓Pong`)
      .addField(`**🔧Ping:**`, ping)
      .addField(`**📌 Latência:**`, Latência + `ms`)
      .addField(`**🗡 Uptime:**`, uptime)
      .setColor("PURPLE")