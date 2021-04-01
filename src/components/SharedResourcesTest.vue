<template>
  <div>
    <p>I'm using Lodash in some {{ msg }} to see if it works.</p>
  </div>
</template>

<script>
import Vue from 'vue';
import lodash from 'lodash';

export default Vue.extend({
  name: 'SharedResourcesTest',
  data() {
    return {
      msg: lodash.concat(['useless'], ['way']).join(' '),
    };
  },
});
</script>
