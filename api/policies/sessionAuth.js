/**
 * @module       sessionAuth
 * @description redirects to /login if user is not logged in
 *
 * @param req { Object } incoming request
 * @param res { Object } result of the request
 * @param next { funtion } default action
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.isAuthenticated()) {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.redirect("/login");
};
