const Discord = require('discord.js');                                                                //for Discord library
const client = new Discord.Client();                                                                  //for Discord client
const fs = require('fs');                                                                             //for filestream
const embed = new Discord.RichEmbed()                                                                 //for Discord embeds
const readFile = require('./readFile.js');                                                            //for readFile function
const message = require('./message.js');                                                              //for converting messages to arrays
const language = require('./language.js');                                                            //for language checks
const basCom = require('./basCom.js');                                                                //for basic commands
const moderation = require('./moderation.js');                                                        //for performing moderation actions
const welcome = require('./welcome.js');                                                             //for welcoming people to the server
const secret = require('./secret.js');          //not uploaded to GitHub to prevent my token from being stolen


let badWords = [''];

//language.txt is not include in repo because of extreme language contained within
fs.open('language.txt', 'r', (err, data) => {                                                         //opens the language document
  if (err) throw err;                                                                                   //if an error, throw an error in the console
  fs.close(data, (err) => { if (err) throw err; });                                                     //close the document; if an error, throw an error in the console
});

badWords = readFile.readFile();                                                                       //load profanities into memory

                                                                                                      //Connects to Discord
client.on('ready', () => {                                                                            //when client is ready/connected
  console.clear();                                                                                      //clear the console
  console.log(`Connected as ${client.user.tag} -- ${client.user.id}`);                                  //log that the bot is connected as Skipper with ID
  console.log("Ready...\n");                                                                            //log that the bot is ready
});



client.on('message', msg => {
	let msgInfo = `Request:\n${msg.author.tag} -- ${msg.author.id}\n`;
  if(!msg.author.bot) {
    msg.content = msg.content.toLowerCase();
    const array = message.convert(msg);

  	const msgInfo = `Request:\n\t${msg.guild.name}\n\t${msg.author.tag} -- ${msg.author.id}\n\t${array[0]}\n\tMessage: "${msg.content}"\n\tTimestamp: ${msg.createdTimestamp}\n\n`

    language.language(msg, array, badWords);

    if(msg.content.startsWith("!ping") || msg.content.startsWith("!avatar") || msg.content.startsWith("!invite") || msg.content.startsWith("!serverinfo"))
      { basCom.basCom(msg, msgInfo); return; }

    else if(!msg.mentions.users.first() && msg.content.startsWith("!delete") && Number(array[1]) <= 100)
      { moderation.delete1(msg, array[1], msgInfo); return; }

    else if(msg.mentions.users.first() && msg.content.startsWith("!delete") && Number(array[5]) <= 100)
      { moderation.delete2(msg, array[1], msgInfo); return;}

    else if (msg.content.startsWith("!ban")) //ID handling inside function
  	  { moderation.ban(msg, array, msgInfo); return ;}

    else if (msg.content.startsWith("!kick") && msg.mentions.users.first())
  	  { moderation.kick(msg, array[3], msgInfo); return; }

    else if (msg.content.startsWith("!softban")) //ID handling inside function
  	  { moderation.softban(msg, array, msgInfo); return; }

    else if (msg.content.startsWith("!unban")) //ID handling inside function
  	  { moderation.unban(msg, array, msgInfo); return ;}
  }
	return;
});

client.on('guildMemberAdd', member => { welcome.welcome(member); });


//bot_secret_token = secret.token();

client.login(secret.token());





// NOTES
// if I convert messages to arrays, then I can check each word individually for profanities
