/// ///////////////////////////////////////////////////////////
//  Title:        readFile.js                               //
//  Author:       Jake Roberts                              //
//  Date:         4/24/2019                                 //
//  Description:  Reads information from a text file into   //
//                an array of words stored in memory        //
//  Dependencies: language.txt                              //
/// ///////////////////////////////////////////////////////////

const fs = require('fs')

exports.readFile = function() {
  const badWords = fs.readFileSync('language.txt').toString().split(/\r?\n/)
  return badWords
}
