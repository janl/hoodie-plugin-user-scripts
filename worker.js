/**
 * Hoodie plugin template
 * An example plugin worker, this is where you put your backend code (if any)
 */

module.exports = function (hoodie, callback) {
  'use strict';

  var plugin_db_name = 'plugin/user-scripts';

  // create plugin database
  hoodie.database.add(plugin_db_name, function(error) {
    if (error && error.error != 'file_exists') {
      console.log(error);
      return callback(error);
    }
  });

  // plugin initialization complete
  callback();

};
