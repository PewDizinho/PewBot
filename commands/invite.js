const { SlashCommandBuilder } = require('discord.js');
const { botInfo } = require("../config.json");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Consiga o invite do bot com as permissões certas!'),
    async execute(interaction) {
        await interaction.reply(`Clique [aqui](https://discord.com/api/oauth2/authorize?client_id=${botInfo.ID}&permissions=8&scope=applications.commands+bot) para convidar o bot`);
     
    },
};