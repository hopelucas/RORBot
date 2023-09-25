module.exports = {
    name: 'random',
    description: 'Replies with the bot ping!',

execute(message, args, Discord){
    if (!args.length ||!args[1]){
        message.channel.send("You need to type in the min and max values like this \`!rand 10 5\`")

    }
    else {
        let max = args[0]
        let min = args[1]

        let randNo = Math.round(Math.random() * max + min)

        const embed = new Discord.MessageEmbed()
        .setTitle("Your random number generated is:")
        .setDescription(randNo)
        .setColor("PINK")
        .setFooter("Random Number Generator")

        message.reply(embed)
    }
}
};