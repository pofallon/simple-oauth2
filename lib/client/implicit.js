//
// ### Implicit flow implementation
//
module.exports = function(config) {

  var core   = require('./../core')(config),
      qs     = require('querystring');

  // ### Redirect the user to the token authorization page
  //
  // * `params.redirectURI` - A String that represents the registered application URI where the
  // user is redirected after authorization.
  // * `params.scope` - A String that represents the application privileges.
  // * `params.state` - A String that represents an optional opaque value used by the client to
  // maintain state between the request and the callback.
  //
  function authorizeURL(params) {
    params.response_type = 'token';
    params.client_id = config.clientID;

    return config.site + config.authorizationPath + '?' + qs.stringify(params);
  }

  return {
    'authorizeURL' : authorizeURL
  }
};
