# bot.js Psuedocode

```javascript
/* create const 'Discord' variable and initialize it as file path to Discord JS library
 * create const 'client' variable and initialize it as a Discord Client object
 * create const 'fs' variable and intialize it as file path to fs JS library (filestream)
 * create const 'embed' variable and intialize it as a Discord RichEmbed object
 * create const 'readFile' variable and intialize it as file path to 'readFile.js' file
 * create const 'message' variable and intialize it as file path to 'message.js' file
 * create const 'language' variable and intialize it as file path to 'language.js' file
 * create const 'basCom' variable and intialize it as file path to 'basCom.js' file
 * create const 'moderation' variable and intialize it as file path to 'moderation.js' file
 * create const 'welcome' variable and intialize it as file path to 'welcome.js' file
 *
 * intialize 'badWords' variable as an empty array
 * initialize 'inviteURL' variable as personal server invite link
 * ^^Will likely delete this and reimplement it for individual server usage^^
 *
 * open 'language.txt' file as read-only, push contents into 'data' variable
 * 	if there's an error, throw an error
 * 	close the file
 * ^^Will likely delete this function altogether, since it is both opened and closed with nothing happening in between^^
 *
 * set 'badWords' variable to the returned value of the readFile function
 *
 * when the client connects to Discord (signals 'ready')
 * 	clear the console
 * 	log in the console the tag and ID the bot is connected as
 * 	log in the console that it is ready
 *
 * when the client signals a message received
 * 	if the message author is not a bot
 * 		create const 'array' variable and set it to returned value of the convert function
 * 		log in the console the contents of the array
 * 		call language function and pass in message object, 'array' array, and 'badWords' array
 *
 * 		if the message content (in lower case) starts with "!ping" or "!avatar" or "!invite"
 * 			call basCom function passing in message object and 'inviteURL' variable
 *
 * 		or if the message does not mention a user, the message starts with "!delete", and the value at array index 1 as a number is less than or equal to 100
 *			call delete1 function (in 'moderation.js') and pass in message object and array index 1
 *		
 *		of if the message mentions a user, the message starts with "!delete", and the value at array index 5 as a number is less than or equal to 100
 *			call delete2 function (in 'moderation.js') and pass in message object andarray index 5
 *
 * 		or if the message starts with "!ban"
 * 			call ban function (in 'moderation.js') and pass in message object and 'array' variable
 *
 *		or if the message starts with "!kick" and mentions a user
 *			call kick function (in 'moderation.js') and pass in message object and index 3 of 'array' variable
 *		or if the message content starts with "!softban"
 *			call 'softban' function (in 'moderation.js') and pass in the message object and 'array' variable
 *		or if the message starts with "!unban"
 *			call 'unban' funciton (in 'moderation.js') and pass in the message object and 'array' variable
 *
 * when the client signals 'guildMemberAdd' (someone joins a server) call 'welcome' function (in 'welcome.js') and pass in the member
 *
 * 'bot_secret_token' variable equals the token provided in the developer portal
 *
 * client object calls login function and passes in 'bot_secret_token' variable
 */
```
