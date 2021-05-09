const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Track a country or worldwide COVID-19 cases",

    async run (client, message, args){

        let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('You are missing some args (ex: ;covid all || ;covid Canada)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
            .setTitle('Informações sobre (Covid19)')
            .setColor('0AFFCF')
            .addFields(
                {name: `> Casos:`, value: covidStats.cases, inline: true},
                { name: `> Casos de hoje:`, value: covidStats.todayCases, inline: true},
                { name: `> Mortes:`, value: covidStats.deaths, inline: true},
                { name: `> Mortes de hoje:`, value: covidStats.todayDeaths, inline: true},
                
                { name: `> Infectados agora:`, value: covidStats.active, inline: true},
                { name: `> Crítico:`, value: covidStats.critical, inline: true},
                { name: `> Testados:`, value: covidStats.tests, inline: true},
            }).catch(e => {
                return message.channel.send('Invalid country provided')
            })
        }
    }
}