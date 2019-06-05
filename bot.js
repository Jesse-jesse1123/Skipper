const Discord = require('discord.js');                                                                //for Discord library
const client = new Discord.Client();                                                                  //for Discord client
const fs = require('fs');                                                                             //for filestream
const embed = new Discord.RichEmbed()                                                                 //for Discord embeds
const readFile = require('./readFile.js');                                                            //for readFile function
const message = require('./message.js');                                                              //for converting messages to arrays
const language = require('./language.js');                                                            //for language checks
const basCom = require('./basCom.js');                                                                //for basic commands
const moderation = require('./moderation.js');                                                        //for performing moderation actions
const welcome = require ('./welcome.js');                                                             //for welcoming people to the server


let badWords = [''];
let inviteURL = "discord.gg/SvdWhY4";

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
  if(!msg.author.bot) {
    const array = message.convert(msg);
    console.log(array);
    language.language(msg, array, badWords);

    if(msg.content.toLowerCase.startsWith("!ping") || msg.content.toLowerCase.startsWith("!avatar") || msg.content.toLowerCase.startsWith("!invite")
	    { basCom.basCom(msg, inviteURL) }

	    //what the fuck is happening here????????????????????????
    else if(array.length === 2 && msg.content.toLowerCase.startsWith("!delete") && Number(array[1]) <= 100) {
	    if(array.length === 2 && Number(array[1] <= 100) { moderation.delete1(msg, array[1]); }
	else if (msg.mentions.user.first() && Number(array[5]) <= 100) { moderation.delete2(msg, array[1]); }
	}
    else if (msg.content.toLowerCase.startsWith("!ban") && msg.mentions.user.first())
	    { moderation.ban(msg, array[3]); }

    else if (msg.content.toLowerCase.startsWith("!kick") && msg.mentions.user.first())
	    { moderation.kick(msg, array[3]); }

    else if (msg.content.toLowerCase.startsWith("!softban") && msg.mentions.user.first())
	    { moderation.softban(msg, array[3]); }

    else if (msg.content.toLowerCase.startsWith("!unban") && msg.mentions.user.first())
	    { moderation.unban(msg, array[3]); }
  }
});

client.on('guildMemberAdd', member => { welcome.welcome(member); });

bot_secret_token = "";

client.login(bot_secret_token);





// NOTES
// if I convert messages to arrays, then I can check each word individually for profanities
