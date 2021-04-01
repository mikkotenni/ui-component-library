var Sympa = Sympa || {};
const Helpers = {};
Helpers.isEmptyOrWhitespace = function (str) {
  return !str || (str.trim && !str.trim() || false);
};
Helpers.compareStr = function (str, str2, ignoreCase) {
  var f = function(txt) {
      return (ignoreCase && txt && txt.toUpperCase ? txt.toUpperCase() : txt);
  }
  return f(str) == f(str2);
};

Sympa.Helpers = {...Helpers};