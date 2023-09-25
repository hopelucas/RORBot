module.exports = {
    name: 'lettuce',
    description: 'Replies with the bot ping!',
  
    callback: async (client, interaction) => {
      await interaction.deferReply();
      const num1 = interaction.options.get('Sides').value;
        var rating = Math.floor(Math.random() * num1 + 1);
      interaction.editReply(
        `AAAAA MY PENIS EXPLODE ${rating} times!`
      );
    },
  };