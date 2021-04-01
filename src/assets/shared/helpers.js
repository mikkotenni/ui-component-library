export default {
  isEmptyOrWhitespace (str) {
    return !str || (str.trim && !str.trim() || false);
  },
  compareStr (str, str2, ignoreCase) {
    var f = function(txt) {
        return (ignoreCase && txt && txt.toUpperCase ? txt.toUpperCase() : txt);
    }
    return f(str) == f(str2);
  }
}