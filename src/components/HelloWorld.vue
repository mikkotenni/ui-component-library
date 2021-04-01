<template>
  <div>
    <p>{{ msg }}</p>
    <SharedResourcesTest />
  </div>
</template>

<script>
import SharedResourcesTest from '@/components/SharedResourcesTest.vue';

export default {
  name: 'HelloWorld',
  components: {
    SharedResourcesTest,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
