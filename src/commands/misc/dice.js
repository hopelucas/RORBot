require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js')

module.exports = {
    name: 'dice',
    description: 'Rolls a dice!',
    options: [
        {
        name: 'dice-sides',
        description: `The number of sides on your dice.`,
        type: ApplicationCommandOptionType.Number,
        required: true,
        },
    ],

  
    callback: async (client, interaction) => {
      await interaction.deferReply();
      const num1 = interaction.options.get('dice-sides').value;
        var rating = Math.floor(Math.random() * num1 + 1);
      interaction.editReply(
        `You rolled a ${rating} - out of a possible ${num1}!`
      );
    },
  };