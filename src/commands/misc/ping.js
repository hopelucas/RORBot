const {
    ButtonStyle,
    EmbedBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ChatInputCommandInteraction,
    ApplicationCommandOptionType,
} = require('discord.js');require('dotenv/config');
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const data = {
    name: 'ping',
    description: 'Pong!',
};

function run({ interaction, client }) {
    interaction.reply(`:ping_pong: Pong! ${client.ws.ping}ms`);
}

module.exports = { data, run };