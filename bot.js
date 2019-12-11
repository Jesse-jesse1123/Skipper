/***************************************************************
 *  Title:        bot.js                                       *
 *  Author:       Jake Roberts                                 *
 *  Created Date: 4/24/2019                                    *
 *  Updated:      6/4/2019                                     *
 *  Description:  Checks messages passed in for non-moderation *
 *  		          commands                                     *
 *  Dependencies: None                                         *
 ***************************************************************/

const Discord = require('discord.js');          //for Discord library
const client = new Discord.Client();            //for Discord client
const fs = require('fs');                       //for filestream
const embed = new Discord.RichEmbed();          //for Discord embeds
const readFile = require('./readFile.js');      //for readFile function
const message = require('./message.js');        //for converting messages to arrays
const language = require('./language.js');      //for language checks
const basCom = require('./basCom.js');          //for basic commands
const moderation = require('./moderation.js');  //for performing moderation actions
const welcome = require('./welcome.js');        //for welcoming people to the server
const secret = require('./secret.js');          //not uploaded to GitHub to prevent my token from being stolen

let badWords = [''];

badWords = readFile.readFile();                 //load profanities into memory

/********************************************************************************
 * "Ready Function"                                                             *
 * Listens for a 'ready' signal when it connect to Discord                      *
 * When the client is connected, the function clears the console and logs to the*
 *  console that it is connected with the ID of Skipper (the bot), and that it  *
 *  is ready                                                                    *
 ********************************************************************************/

client.on('ready', () => {
  console.clear();
  console.log(`Connected as ${client.user.tag} -- ${client.user.id}`);
  console.log("Ready...\n");
});

/********************************************************************************
 * "Message Function"                                                           *
 * Listens for messages sent to servers that it is in                           *
 * When a message is sent to a server, this function first checks if the message*
 *  was not sent by a bot, converts it all to lower case, converts it to an     *
 *  array, initializes a const variable that holds information about the message*
 *  (server it was sent in, tag, ID, message content, and timestamp). Then      *
 *  checks the message for language, and checks for any commands in the message *
 ********************************************************************************/

client.on('message', async msg => {
	//let msgInfo = `Request:\n${msg.author.tag} -- ${msg.author.id}\n`;

  // if the message is from a bot, return
  if(msg.author.bot) return;


  // convert message to lower case and fill an array with individual words
  msg.content = msg.content.toLowerCase();
  const array = message.convert(msg);

  // intialize a variable that holds the default information relating to any commands or functions run
	const msgInfo = `Request:\n\t${msg.guild.name}\n\t${msg.author.tag} -- ${msg.author.id}\n\t${array[0]}\n\tMessage: "${msg.content}"\n\tTimestamp: ${msg.createdTimestamp}\n\n`

  // check the message (array) for language
  language.language(msg, array, badWords);

  // if the message doesn't contain a mentioned user, starts with "!delete", and number specified is less than or equal to 100...
  if(!msg.mentions.users.first() && msg.content.startsWith("!delete") && Number(array[1]) <= 100)
  {
    // call delete1 function in "moderation.js" and return
    moderation.delete1(msg, array[1], msgInfo);
    return;
  }

  // if message mentions a user, starts with "!delete", and number specified is less than or equal to 100...
  if(msg.mentions.users.first() && msg.content.startsWith("!delete") && Number(array[5]) <= 100)
  {
    // call delete2 function in "moderation.js" and return
    moderation.delete2(msg, array[1], msgInfo);
    return;
  }

  // if message starts with "!ban"...
  if (msg.content.startsWith("!ban"))
	{
    // call ban function in "moderation.js" and return
    moderation.ban(msg);
    return;
  }

  // if message starts with "!kick" and mentions a user...
  if (msg.content.startsWith("!kick") && msg.mentions.users.first())
	{
    // call kick function in "moderation.js" and return...
    moderation.kick(msg);
    return;
  }

  // if messgae starts with "!softban"...
  if(msg.content.startsWith("!softban"))
  {
    moderation.softban(msg);

    //call ban and unban functions in "moderation.js" and return
    // moderation.ban(msg, array, msgInfo);
    // moderation.unban(msg, array, msgInfo);
    return;
  }

  // if message starts with "!unban"...
  if (msg.content.startsWith("!unban")) //ID handling inside function
	{
    // call unban function in "moderation.js" and return
    moderation.unban(msg);
    return;
  }

  basCom.basCom(msg, msgInfo);
  return;
});

client.on('guildMemberAdd', member => { welcome.welcome(member); });


//bot_secret_token = secret.token();

client.login(secret.token());





// NOTES
// if I convert messages to arrays, then I can check each word individually for profanities

/********************************************************************************
 *   *
 ********************************************************************************/
