const { SlashCommandBuilder } = require('discord.js');
const { data, execute } = require('./ping');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides user info.'),
    async execute(interaction) {
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    }
};
