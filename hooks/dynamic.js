
var plugin_db_name = 'plugin/user-scripts';

module.exports = function(hoodie, callback) {
  return {
    'server.api.plugin-request': function(request, reply) {
      // console.log('handle user-scripts web hook');

      if (!request.query.id) {
        reply();
        return;
      }


      hoodie.database(plugin_db_name).find('script', request.query.id, function(error, doc) {

        if (!doc || !doc.script) {
          reply();
          return;
        }
        
        reply(doc.script);
        return;

      });

      return true;
    }
  };
};
