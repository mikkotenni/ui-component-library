<template>
  <div>
    <p>I'm using Lodash in some {{ msg }} to see if it works. Is empty or whitespace is {{ isEmpty }}.</p>
  </div>
</template>

<script>
import Vue from 'vue';
import lodash from 'lodash';
import Helpers from '../assets/shared/helpers.js';

export default Vue.extend({
  name: 'SharedResourcesTest',
  data() {
    return {
      msg: lodash.concat(['useless'], ['way']).join(' '),
      isEmpty: Helpers.isEmptyOrWhitespace('   ')
    };
  },
});
</script>
