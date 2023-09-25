require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js')

module.exports = {
    name: 'lettuce',
    description: 'Replies with the bot ping!',
    options: [
        {
        name: 'first-number',
        description: `The first number`,
        type: ApplicationCommandOptionType.Number,
        required: true,
        },
    ],

  
    callback: async (client, interaction) => {
      await interaction.deferReply();
      const num1 = interaction.options.get('first-number').value;
        var rating = Math.floor(Math.random() * num1 + 1);
      interaction.editReply(
        `AAAAA MY PENIS EXPLODE ${rating} times!`
      );
    },
  };