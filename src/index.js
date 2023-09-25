require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');
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

client.on("ready", () => {
  client.user.setActivity({
    name: 'Bread',
    type: ActivityType.Listening,
   })
  });

client.login(process.env.TOKEN);
