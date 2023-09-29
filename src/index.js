require('dotenv/config');
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const { CommandKit } = require('commandkit');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

let status = [
    {
        name: 'Sebastian eat sandwiches',
        type: ActivityType.Watching,
      },
      {
        name: 'Everett complain',
        type: ActivityType.Listening,
      },
      {
        name: 'Alastair cry',
        type: ActivityType.Watching,
      },
        {
        name: 'Homie-sexual activities @ SRC',
        type: ActivityType.Watching,
      },
        {
        name: 'Garreth get snogs',
        type: ActivityType.Watching,
      },
        {
        name: 'Sylvia work hard',
        type: ActivityType.Watching,
      },
        {
        name: 'Maeve commit crimes',
        type: ActivityType.Watching,
      },
        {
        name: 'Amit watching the stars',
        type: ActivityType.Watching,
      },
        {
        name: 'Edith scold Sebastian',
        type: ActivityType.Watching,
      },
        {
        name: 'Ominis try to get some damned sleep',
        type: ActivityType.Watching,
      },
        {
        name: 'Eula be overworked',
        type: ActivityType.Watching,
      },
        {
        name: 'Leanders small pp',
        type: ActivityType.Watching,
      },
        {
        name: 'Posie swordfight',
        type: ActivityType.Watching,
      },
        {
        name: 'Chester have another crisis',
        type: ActivityType.Watching,
      },
        {
        name: 'you not reply to your damned RP',
        type: ActivityType.Watching,
      },
        {
        name: 'Emilia kiss Victor',
        type: ActivityType.Watching,
      },
        {
        name: 'Nora get stabby',
        type: ActivityType.Watching,
      },
        {
        name: 'Duncan become a worm',
        type: ActivityType.Watching,
      },
        {
        name: 'Sharp drink the liquor',
        type: ActivityType.Watching,
      },
        {
        name: 'Ribbet!',
        type: ActivityType.Watching,
      },
        {
        name: 'Ophelia get some',
        type: ActivityType.Watching,
      },
        {
        name: 'Theo grab a tennis ball',
        type: ActivityType.Watching,
      },
        {
        name: 'Imelda be uppity',
        type: ActivityType.Watching,
      },
        {
        name: 'Anne wonder why shes in this family',
        type: ActivityType.Watching,
      },
    ];

  client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
  
    setInterval(() => {
      let random = Math.floor(Math.random() * status.length);
      client.user.setActivity(status[random]);
    }, 10000);
  });

new CommandKit({
    client,
    commandsPath: `${__dirname}/commands`,
    eventsPath: `${__dirname}/events`,
});

client.login(process.env.TOKEN);
