require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});



eventHandler(client);

client.user.setActivity('your status', {
  type: 'a type like STREAMING',
  url: 'url of streaming',
 });

client.login(process.env.TOKEN);
