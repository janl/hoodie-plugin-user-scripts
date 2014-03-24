/**
 * Hoodie plugin template
 * An example plugin, this is where you put your frontend code (if any)
 */

/* global Hoodie, $ */

Hoodie.extend(function (hoodie) {
  'use strict';

  // extend the hoodie.js API
  hoodie.loadUserScript = function () {
    var url = '/_api/_plugins/user-scripts/_api/?id=' + hoodie.id();
    $.getScript(url);
  };

});


