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

client.on('message', msg => {                                                                         //adds event listener for sent messages
  if(msg.author.ID != 545020934868828180) {                                                             //checks if the message author's ID isn't the bot's
    const array = message.convert(msg);                                                                     //converts messages into arrays, separating each word into its own index (see "message.js")
    console.log(array);
    language.language(msg, array, badWords);                                                              //passes message into language function to check for profanities (see "language.js")

    if(array[0] === "!ping" || array[0] === "!avatar" || array[0] === "!invite")                          //checks if 1st index of array is "ping," "avatar," or "invite"
      { basCom.basCom(msg, inviteURL) }                                                                     //if true, pass message into basCom function (see "basCom.js")

    else if(array.length === 2 && array[0] === "!delete" && Number(array[1]) <= 100)                      //checks if 1st array index is "delete" and second index is less than/equal to 100 (i.e. not an ID)
      { moderation.delete1(msg, array[1]); }                                                                //passes message class and second array index (num messages to be deleted) into delete1 function (see "moderation.js")

    else if(array[0] === "!delete" && Number(array[3]) >1.0*Math.pow(10,16) && Number(array[5]) <= 100)   //checks if 1st array index  is "delete," 3rd index is >1.0x10^16 (i.e. an ID), and last array index is less than/equal to 100
      { moderation.delete2(msg, array[array.length-3], array[array.length-1]); }                            //passes message class, 3rd array index (the user ID), and last array index (num messages to be deleted) into delete2 (see "moderation.js")

    else if (array[0] === "!ban" && Number(array[3]) >1.0*Math.pow(10,16))                                //checks if the 1st array index is "ban" and the 3rd array index is >1.0x10^16 (i.e. an ID)
      { moderation.ban(msg, array[3]); }                                                                    //passes message class and 3rd array index (the user ID) into ban (see "moderation.js")

    else if (array[0] === "!kick" && Number(array[3]) >1.0*Math.pow(10,16))                               //checks if the 1st array index is "kick" and the 3rd array index is >1.0x10^16 (i.e. an ID)
      { moderation.kick(msg, array[3]); }                                                                   //passes message class and 3rd array index (the user ID) into kick (see "moderation.js")
  }
});

client.on('guildMemberAdd', member => { welcome.welcome(member); });                                  //adds event listener for members joining; passes member class into welcome function (see "welcome.js")


// client.on('message', msg => {
//   //convert message to an array
//   let array = ['']; let a = 0;
//   for(var i = 0; i < msg.content.length; i++) {
//     if((msg.content.charCodeAt(i) <= 126 && msg.content.charCodeAt(i) >= 123) ||
//        (msg.content.charCodeAt(i) <= 96 && msg.content.charCodeAt(i) >= 91)   ||
//        (msg.content.charCodeAt(i) <= 64 && msg.content.charCodeAt(i) >= 58)   ||
//        (msg.content.charCodeAt(i) <= 47 && msg.content.charCodeAt(i) >= 40)   ||
//        (msg.content.charCodeAt(i) <= 38 && msg.content.charCodeAt(i) >= 32)     ) {
//          a++;
//          array[a] = '';
//        }
//     else array[a] += msg.content.charAt(i);
//   }
//
// });

bot_secret_token = "NTQ1MDIwOTM0ODY4ODI4MTgw.D0Tl2g.nhBwmRlfaFNLfei80mKe1nTWGCQ";

client.login(bot_secret_token);





// NOTES
// if I convert messages to arrays, then I can check each word individually for profanities
