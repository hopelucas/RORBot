module.exports = {
    name: 'lettuce',
    description: 'Replies with the bot ping!',
    type: ApplicationCommandOptionType.Number,

  
    callback: async (client, interaction) => {
      await interaction.deferReply();
        var rating = Math.floor(Math.random() * 20 + 1);
      interaction.editReply(
        `AAAAA MY PENIS EXPLODE ${rating} times!`
      );
    },
  };