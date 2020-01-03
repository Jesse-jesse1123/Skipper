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

  get id() {
    return this.#id;
  }

  get words() {
    return this.#words;
  }

}

module.exports = Lang;
