const { SlashCommandBuilder } = require('discord.js');
const PewEmbed = require('../util/pewEmbed');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Me faça dizer algo')
        .addStringOption(option => option.setName('texto').setDescription('O texto que eu devo dizer').setRequired(true))
        .addStringOption(option => option.setName('imagem').setDescription('A URL da imagem que eu devo usar'))
    ,
    async execute(interaction) {
        await interaction.reply({
            content: ".", embeds: [new PewEmbed({
                author: interaction.user.displayName,
                avatarURL: interaction.member.avatarURL(),
                description: interaction.options.getString('texto'),
                image: interaction.options.getString('imagem'),
                
            }).embed]
        });

    },
};