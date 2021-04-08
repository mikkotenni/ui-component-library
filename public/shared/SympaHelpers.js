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
Helpers.stripHtml = function (txt, limitLength) {
  var _txt = txt && txt.replace ? txt.replace(/<(?:.|\n)*?>/gm, '') : txt;
  if (limitLength) {
      _txt = Helpers.limitTextLength(_txt, limitLength);
  }
  return _txt;
};
Helpers.limitTextLength = function (txt, length) {
  if (txt && txt.length > length) {
      txt = txt.substr(0, length) + "...";
  }
  return txt;
};

Sympa.Helpers = {...Helpers};