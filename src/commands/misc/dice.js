module.exports = { 
  name: 'roll', 
  description: 'Roll\'s a die', 
  args: true, 
  usage: ['<die-size>', '<number-of-rolls>d<die-size>'], 
  aliases: ['rol', 'nat20'], authorizedChannels:['general'], 
   execute(message, args) { 
     let arg = args[0]; 
     let modifier = 0; 
     let resMessage = ''; 
     if(/^.*\+[0-9]+$/.test(arg)) { 
       const rollAndModifier = arg.split('+'); arg = rollAndModifier[0]; 
       modifier = rollAndModifier[1]; 
     } 
     if (/^[0-9]+d[0-9]+$/.test(arg)){ 
        rollInfo = arg.split('d'); 
        numRolls = parseInt(rollInfo[0]); 
        dieSize = parseInt(rollInfo[1]); 
        const resRolls = Array.apply(null, {length: numRolls}).map((_) => { 
           return Math.floor(Math.random()*dieSize) + 1; 
         }); 
         resMessage = `rolled: ${resRolls.join(",")}`; 
      } else { 
         if(/^d[0-9]+$/.test(arg)) { 
           arg = arg.replace('d', ''); 
         } 
         const dieSize = parseInt(arg); 
         if (isNaN(dieSize)) { 
           return message.reply('Invalid roll'); 
         } 
         resMessage = `rolled ${Math.floor(Math.random()*dieSize) + 1}`; 
       } 
       if(modifier > 0) { 
         resMessage += ` +${modifier}`; 
       } 
     return message.reply(resMessage); 
   }, 
 };const DiceRoller = require('../node_modules/dice-roller/dice-roller.js');

module.exports = {
	name: 'roll',
	aliases: ['r'],
	description: 'Executes a command given in dice notation, and returns the results. Dice notation may not contain spaces.\nSee https://github.com/GreenImp/rpg-dice-roller/blob/master/readme.md for more information about dice notation.',
	usage: '[dice-notation]',
	args: false,
	execute(message, args) {
		
		let dice = new DiceRoller.DiceRoller(); // create a new instance of the DiceRoller

		let input = args[0] ? args[0] : '1d6';
		
		dice.roll(input); // roll the dice

		let result = dice.log.shift(); // get the latest dice rolls from the log

		let reply = `${message.author} rolled ${result.toString()}`;

		return message.channel.send(reply).catch(console.error);
	},
};