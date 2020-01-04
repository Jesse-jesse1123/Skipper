/***************************************************************
 *  Title:        bot.js                                       *
 *  Author:       Jake Roberts                                 *
 *  Created Date: 4/24/2019                                    *
 *  Updated:      6/4/2019                                     *
 *  Description:  Checks messages passed in for non-moderation *
 *  		          commands                                     *
 *  Dependencies: None                                         *
 ***************************************************************/

const DISCORD = require('discord.js');          //for Discord library
const CLIENT = new DISCORD.Client();            //for Discord client
// const fs = require('fs');                       //for filestream
// const EMBED = new Discord.RichEmbed();          //for Discord embeds
// const readFile = require('./readFile.js');      //for readFile function
const MESSAGE = require('./message.js');        //for converting messages to arrays
const BASCOM = require('./basCom.js');          //for basic commands
const MODERATION = require('./moderation.js');  //for performing MODERATION actions
const WELCOME = require('./welcome.js');        //for welcoming people to the server
const SECRET = require('./secret.js');          //not uploaded to GitHub to prevent my token from being stolen

const LANG = require('./Lang.js');
const LANGUAGE = require('./language.js')

let servLang = {''};

//servLang = buildArr();

/********************************************************************************
 * "Ready Function"                                                             *
 * Listens for a 'ready' signal when it connect to Discord                      *
 * When the CLIENT is connected, the function clears the console and logs to the*
 *  console that it is connected with the ID of Skipper (the bot), and that it  *
 *  is ready                                                                    *
 ********************************************************************************/

CLIENT.on('ready', () => {
  console.clear();
  console.log(`Connected as ${CLIENT.user.tag} -- ${CLIENT.user.id}`);
  console.log("Ready...\n");
});

/********************************************************************************
 * "MESSAGE Function"                                                           *
 * Listens for messages sent to servers that it is in                           *
 * When a MESSAGE is sent to a server, this function first checks if the MESSAGE*
 *  was not sent by a bot, converts it all to lower case, converts it to an     *
 *  array, initializes a const variable that holds information about the MESSAGE*
 *  (server it was sent in, tag, ID, MESSAGE content, and timestamp). Then      *
 *  checks the MESSAGE for language, and checks for any commands in the MESSAGE *
 ********************************************************************************/

CLIENT.on('message', async msg = (servLang) => {
	//let MSGINFO = `Request:\n${msg.author.tag} -- ${msg.author.id}\n`;

  // if the MESSAGE is from a bot, return
  if(msg.author.bot) return;


  // convert MESSAGE to lower case and fill an array with individual words
  msg.content = msg.content.toLowerCase();
  const ARRAY = MESSAGE.convert(msg);

  // intialize a variable that holds the default information relating to any commands or functions run
	const MSGINFO = `Request:\n\t${msg.guild.name}\n\t${msg.author.tag} -- ${msg.author.id}\n\t${array[0]}\n\tMessage: "${msg.content}"\n\tTimestamp: ${msg.createdTimestamp}\n\n`

  LANGUAGE.language(msg, msg.guild.id, servLang, ARRAY);

  // if the MESSAGE doesn't contain a mentioned user, starts with "!delete", and number specified is less than or equal to 100...
  if(!msg.mentions.users.first() && msg.content.startsWith("!delete") && Number(array[1]) <= 100)
  {
    // call delete1 function in "moderation.js" and return
    MODERATION.delete1(msg, array[1], MSGINFO);
    return;
  }

  // if MESSAGE mentions a user, starts with "!delete", and number specified is less than or equal to 100...
  if(msg.mentions.users.first() && msg.content.startsWith("!delete") && Number(array[5]) <= 100)
  {
    // call delete2 function in "moderation.js" and return
    MODERATION.delete2(msg, array[1], MSGINFO);
    return;
  }

  // if MESSAGE starts with "!ban"...
  if (msg.content.startsWith("!ban"))
	{
    // call ban function in "moderation.js" and return
    MODERATION.ban(msg);
    return;
  }

  // if MESSAGE starts with "!kick" and mentions a user...
  if (msg.content.startsWith("!kick") && msg.mentions.users.first())
	{
    // call kick function in "moderation.js" and return...
    MODERATION.kick(msg);
    return;
  }

  // if messgae starts with "!softban"...
  if(msg.content.startsWith("!softban"))
  {
    MODERATION.softban(msg);

    //call ban and unban functions in "moderation.js" and return
    // MODERATION.ban(msg, array, MSGINFO);
    // MODERATION.unban(msg, array, MSGINFO);
    return;
  }

  // if MESSAGE starts with "!unban"...
  if (msg.content.startsWith("!unban")) //ID handling inside function
	{
    // call unban function in "moderation.js" and return
    MODERATION.unban(msg);
    return;
  }

  BASCOM.basCom(msg, MSGINFO);
  return;
});

CLIENT.on('guildMemberAdd', member => { WELCOME.welcome(member); });


//bot_secret_token = SECRET.token();

CLIENT.login(SECRET.token());





// NOTES
// if I convert MESSAGEs to arrays, then I can check each word individually for profanities

/********************************************************************************
 *   *
 ********************************************************************************/
