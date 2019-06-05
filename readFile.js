//////////////////////////////////////////////////////////////
//  Title:        readFile.js                               //
//  Author:       Jake Roberts                              //
//  Date:         4/24/2019                                 //
//  Description:  Reads information from a text file into   //
//                an array of words stored in memory        //
//  Dependencies: language.txt                              //
//////////////////////////////////////////////////////////////

const fs = require('fs');

exports.readFile = function() {
  let badWords2 = [''];
  fs.readFile('language.txt', 'utf-8', (err, data) => {
    if(err) throw err;

    let a = 0;
    for(let i = 0; i < data.length; i++) {
      if(data[i] === ',') {
        a++;
        badWords2[a] = '';
      }
      else badWords2[a] += data.charAt(i);
    }

    for(var i = 0; i < badWords2.length; i++) console.log(badWords2[i]);
    return badWords2;
  });
  return badWords2;
}
