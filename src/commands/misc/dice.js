module.exports = {
    name: 'random',
    description: 'returns an aleatory number',

    callback: async (client, interaction) => {
        await interaction.deferReply();
    
        var rating = Math.floor(Math.random() * 100) + 1;
    
        const ping = reply.createdTimestamp - interaction.createdTimestamp;
    
        interaction.editReply(
          `I rate you ${rating}/100`
        );
      },
    };
    