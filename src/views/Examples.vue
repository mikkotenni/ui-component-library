<template>
  <div>
    <h1>Examples</h1>
    <Block
      title="Block_component"
      :titleIsTermKey="true"
      :actions="[
        { text: 'Do_Something', isTermKey: true, action: 'myfancyactionname' },
      ]"
    >
      <Input/>
    </Block>
  </div>
</template>

<script>
// @ is an alias to /src
import Block from "@/components/library/Block.vue";
import Input from "@/components/library/Input.vue";

export default {
  name: "Examples",
  components: {
    Block,
    Input
  },
};
</script>
