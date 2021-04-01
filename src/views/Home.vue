<template>
  <div>
    <h1>Home</h1>
    <HelloWorld msg="Hello world!"/>
    <VueText :texts="[{text: 'aaa'}]" modifiers="some modifier classes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import VueText from '@/components/Component.Text.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    VueText
  }
}
</script>
