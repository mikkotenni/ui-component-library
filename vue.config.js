// https://cli.vuejs.org/config/

/*
* Return shared resources considered as externals.
*/
function getUiComponentLibraryExternals() {
  return {
    lodash: 'lodash',
    underscore: 'underscore'
  };
}

module.exports = {
  configureWebpack: {
    // Leave out externals on library target build.
    externals: process.env.NODE_ENV === 'production' ?
      getUiComponentLibraryExternals() : {}
  }
}