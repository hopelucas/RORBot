require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

module.exports = (client) => {

    console.log('Natsuki is online!');
    client.user.setActivity('my status', { type: 'PLAYING' })
}