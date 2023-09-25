module.exports = {
    name: 'test',
    description: "ping cmd",

    callback: async (client, interaction) => {
      await interaction.deferReply();


      let command = '*1d20+2d10-3';
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