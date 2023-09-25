module.exports = {
    name: 'lettuce',
    description: 'Replies with the bot ping!',
  
    callback: async (client, interaction) => {
      await interaction.deferReply();
    var rating = Math.floor(Math.random() * 100) + 1;
      interaction.editReply(
        `AAAAA MY PENIS EXPLODE ${rating} times!`
      );
    },
  };