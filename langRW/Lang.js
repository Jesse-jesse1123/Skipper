//////////////////////////////////////////////////////////////
//  Title:        Lang.js                                   //
//  Author:       Jake Roberts                              //
//  Date:         1/2/2020                                  //
//  Description:  Contains Lang class                       //
//  Dependencies:                                           //
//////////////////////////////////////////////////////////////

class Lang {

  #id = '';
  #words = {''};

  constructor(id) {
    this.#id = id;
  }

  get getID() {
    return this.#id;
  }

  get getWords() {
    return this.#words;
  }

}

module.exports = Lang;
