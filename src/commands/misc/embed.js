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
      const num2 = interaction.options.get('dice-modifiers').value;


      let command = `*${num3}d${num1}+${num2}`;
      let total = 0;
      let individualRolls = [];
      let rolls = command.match(/(\d+)d(\d+)/g);
      
      for (let i = 0; i < rolls.length; i++) {
        let [count, size] = rolls[i].split('d').map((val) => parseInt(val));
      
        for (let j = 0; j < count; j++) {
          let roll = Math.floor(Math.random() * size) + 1;
          individualRolls.push(roll);
          total += roll;
        }
      }
      
      let modifier = command.match(/([+-]\d+)(?!d)/);
      
      if (modifier) {
        total += Number(modifier[0]);
      }
      
      console.log(`You rolled ${command} and got ${total}!
      Individual rolls: ${individualRolls}
      Modifier: ${modifier?.[0]}`);

      interaction.editReply(`${total}`);


    },
  };