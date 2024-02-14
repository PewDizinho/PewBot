module.exports = class Deploy {

    deploy() {
        const { REST, Routes } = require('discord.js');
        const { botInfo } = require('./config.json');
        const fs = require('node:fs');

        const commands = [];
        // Grab all the command files from the commands directory you created earlier
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            commands.push(command.data.toJSON());
        }

        // Construct and prepare an instance of the REST module
        const rest = new REST({ version: '10' }).setToken(botInfo.TOKEN);

        // and deploy your commands!
        (async () => {
            try {
                console.log(`${commands.length} Comandos sendo carregados.`);

                // The put method is used to fully refresh all commands in the guild with the current set

                const data = await rest.put(
                    Routes.applicationCommands(botInfo.ID),
                    { body: commands },
                );

                console.log(`${data.length} Comandos carregados com sucesso!`);
            } catch (error) {

                console.error(error);
            }
        })();
    }
}
