<template>
  <div>
    <p>I'm using Lodash in some {{ msg }} to see if it works. Is empty or whitespace has value of {{ isEmpty }}.</p>
  </div>
</template>

<script>
import Vue from 'vue';
import lodash from 'lodash';

// Don't raise ESLint errors on following undeclared variables of shared resources:
/* global Sympa */

export default Vue.extend({
  name: 'SharedResourcesTest',
  data() {
    return {
      msg: lodash.concat(['useless'], ['way']).join(' '),
      isEmpty: Sympa.Helpers.isEmptyOrWhitespace('   ')
    };
  },
});
</script>
