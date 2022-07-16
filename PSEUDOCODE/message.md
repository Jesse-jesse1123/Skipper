# message.js Pseudocode

```javascript
/* include discord library
 * create new client class
 *
 * initialize exported 'convert' function
 * 	initialize an empty array then variable 'a' as 0
 * 	iterate through each message string index
 * 		if
 * 		  ASCII value is <= 126 and >= 123 or
 * 		  ASCII value is <= 96 and >= 91 or
 * 		  ASCII value is <= 64 and >= 58 or
 * 		  ASCII value is <= 47 and >= 40 or
 * 		  ASCII value is <= 38 and >= 34 or
 * 		  ASCII value is equal to 32
 * 			increment variable 'a' up by one
 * 			array at index 'a' equals ''
 * 		otherwise add character at item index 0 to array at index 'a'
 * 	return the array
 *
 *
 * 	ASCII values equivalents:
 * 	     126 - 123: ~ } | {
 * 	     96 - 91:   ` _ ^ ] \ [
 * 	     64 - 58:   @ ? > " < ; :
 * 	     47 - 40:   / . - , + * ) (
 * 	     38 - 34:   & % $ # "
 * 	     32:        <SPACE>
 */
 ```
