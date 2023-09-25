require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType, EmbedBuilder} = require('discord.js')

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
        {
            name: 'dice-modifiers',
            description: `Add a modifier?`,
            type: ApplicationCommandOptionType.Number,
            required: false,
        },
        {
            name: 'dice-numberof',
            description: `How many dice should be rolled?`,
            type: ApplicationCommandOptionType.Number,
            required: false,
        },
    ],

  
    callback: async (client, interaction) => {
      await interaction.deferReply();


      const num1 = interaction.options.get('dice-sides').value;
      const num3 = interaction.options.get('dice-numberof').value;
      const num2 = interaction.options.get('dice-modifiers')?.value;
        var rating = Math.floor(((Math.random() * num1 + 1) * num3) + num2);

    const embed = new EmbedBuilder()
        .setTitle(`Result: ${rating}!`)
        .setDescription(`You roll some dice.`)
        .setColor('Random')
        .addFields({
            name: `Sides:`,
            inline: true,
        }, {
            name: `Number of Dice:`,
            value: num3,
            inline: true,
        }, {
            name: `Modifiers:`,
            inline: true,
        },)

      interaction.editReply({embeds: [embed]});

    },
  };