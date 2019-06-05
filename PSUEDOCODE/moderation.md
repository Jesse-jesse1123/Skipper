# moderation.js Psuedocode

```javascript
/* aquire Discord JS library
 * create new client object
 *
 * export delete1 function with passed values of the message object and a the number of messages to be deleted
 * 	empty for now
 *
 * export delete2 function with passed values of the message object, user ID, and number of messages to be deleted
 *
 * export kick function with passed value of message object
 * 	log in console "kick was run"
 *
 * 	if the message author's highest role does not have the kick members permission, reply "you can't use that command"
 * 	otherwise
 * 		initialize `member` variable (const) as the first user mentioned
 * 		log in console the user mentioned
 *		if `member` variable exists
 *			kick the user with an empty reason
 *			then reply to message author that user was successfully kicked
 *			if there's an error, reply to message author that the user couldn't be kicked and log error in console
 *		otherwise reply to message author that the person isn't in the server
 *
 * export softban function with passed value of message object
 * 	log in console "softban was run"
 * 	TO BE UPDATED LATER WITH CODE
 *
 * export ban function with passed values of message object and user ID
 * 	code same as kick function, but with 'ban' written in places where 'kick' is written
 * 	and message author highest role permissions can ban members
 *
 * export unban function with passed value of message object
 * 	log in console that unban function was run
 * 	TO BE UPDATED LATER WITH CODE
 */
 ```
