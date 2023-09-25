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
 };