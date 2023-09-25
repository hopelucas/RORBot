require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js')

module.exports = {
    name: 'Dice',
    description: 'Rolls a dice!',
    options: [
        {
        name: 'Dice Sides',
        description: `The number of sides on your dice.`,
        type: ApplicationCommandOptionType.Number,
        required: true,
        },
    ],

  
    callback: async (client, interaction) => {
      await interaction.deferReply();
      const num1 = interaction.options.get('Dice Sides').value;
        var rating = Math.floor(Math.random() * num1 + 1);
      interaction.editReply(
        `You rolled a ${rating} - out of a possible ${num1}!`
      );
    },
  };