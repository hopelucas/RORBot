module.exports = {
    name: 'lettuce',
    description: 'Replies with the bot ping!',
  
    callback: async (client, interaction) => {
      await interaction.deferReply();
  
  
      interaction.editReply(
        `AAAAA MY PENIS EXPLODE`
      );
    },
  };