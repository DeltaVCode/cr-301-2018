'use strict';
var app = app || {};

// no x out here

(function (module) {
  var x = 'does not exist outside IIFE';

  var magic = {}; // my collection of magic stuff
  // "export" magic to the module (at top or bottom)
  module.magic = magic;

  // Or in one line:
  // var magic = module.magic = {};

  var pickedCard = 'AH';
  magic.cardTrick = function(userCard) {
    if (pickedCard == userCard) { console.log('yay'); }
    else { console.log('I am not actually a magician'); }
  };
  magic.MY_CONSTANT_COMPANION = 'Companion Cube';
})(app);
