const { ApplicationCommandOptionType, ChatInputCommandInteraction, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle }= require('discord.js');


const choices = [
    { name: 'Rock', emoji: '', beats: 'Scissors'},
    { name: 'Paper', emoji: '', beats: 'Rock'},
    { name: 'Scissors', emoji: '', beats: 'Paper'},
]

module.exports = {
    name: 'rps',
        description: 'play rock paper scissors with another user',
        dm_permission: false,
        options: [
            {
                name: 'user',
                description: "The user you want to play with",
                type: ApplicationCommandOptionType.User,
                required: true,
            }
        ]
}
    

    /**
    * @param {object} param0
    * @param {ChatInputCommandInteraction} param0.interaction
    */
    run: async ({interaction}) => {
        try {
            const targetUser = interaction.options.getUser('user');

            if (interaction.user.id === targetUser.id) {
                interaction.reply({
                    content: 'Stop trying to play with yourself, idiot',
                    ephemeral: true,
                })
                return;
            }
            if (targetUser.bot) {
                interaction.reply({
                    content: 'You cant play rock paper scissors with a bot!',
                    ephemeral: true,
                })
                return;
            }

            const embed = new EmbedBuilder()
            .setTitle('Rock Paper Scissors')
            .setDescription(`It's currently ${targetUser}'s turn.`)
            .setColor('Random')
            .setTimestamp(newDate())

            const buttons = choices.map((choice) => {
                return new ButtonBuilder()
                .setCustomId(choice.name)
                .setLabel(choice.name)
                .setStyle(ButtonStyle.Primary)
                .setEmoji(choice.emoji)

            });

            const row = new ActionRowBuilder().addComponents(buttons);

            const reply = await interaction.reply({
                content: `${targetUser}, you have been challenged to a game of Rock Paper Scissors, by ${interaction.user}. To start playing, click one of the buttons below.`,
                embeds:[embed],
                components: [row],
            })

            const targetUserInteraction = await reply.awaitMessageComponent({
                filter: (i) => i.userid === targetUser.id,
                time: 30_000,

            }).catch(async (error) => {
                embed.setDescription(`Game over. ${targetUser} did not respond.`)
                await reply.edit({ embed: [embed], components: []});
            });

            if (!targetUserInteraction) return;

            const targetUserChoice = choices.find(
                (choice) => choice.name === targetUserInteraction.customId,
            );

            await targetUserInteraction.reply({
                content: `You picked ${targetUserChoice.name + targetUserChoice.emoji}`,
                ephemeral: true,

            });

            // edit embed updated user turn
            embed.setDescription(`It's currently ${interaction.user}s turn`);
            await reply.edit({
                content: `${interaction.user}, it's your turn!`,
                embeds: [embed],

            });

            const initialUserInteraction = await reply.awaitMessageComponent({
                filter: (i) => i.userid === interaction.user.id,
                time: 30_000,

            }).catch(async (error) => {
                embed.setDescription(`Game over. ${interaction.user} did not respond.`)
                await reply.edit({ embed: [embed], components: []});
            });

            if (!initialUserInteraction) return;

            const initialUserChoice = choices.find(
                (choice) => choice.name === initialUserInteraction.customId
            );
            let result;
            
            if (targetUserChoice.beats === initialUserChoice.name) {
                result = `${targetUser} won!`;
            }

            if (initialUserChoice.beats === targetUserChoice.name) {
                result = `${interaction.user} won!`;
            }
            if (targetUserChoice.name === initialUserChoice.name) {
                result = `It was a draw!`;
            }

            embed.setDescription(
                `${targetUser} picked ${targetUserChoice.name + targetUserChoice.emoji}\n${interaction.user} picked ${initialUserChoice.name + initialUserChoice.emoji}\n\n${result}`
            );

            reply.edit({ embeds: [embed], components: [] });

        } catch (error) {
          console.log(`Error with /rps`);
          console.error(error);
        }
    
    }