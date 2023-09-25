require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

module.exports = (client) => {

    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Using !help",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    })
};