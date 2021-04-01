<template>
  <div class="vue-text" :class="modifierClasses">
    <p v-if="hasDefaultSlot">
      <slot></slot>
    </p>
    <p v-for="item in sanitizedTexts" :key="item.order">
      {{ item.text }}
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import ComponentBase from "./Component.Base.vue"

export default Vue.extend({
  name: "VueText",
  mixins: [ComponentBase],
  styleGuideName: 'vue-text',
  props: {
    texts: {
      type: Array,
      required: false,
      default: function () {
        return [];
      },
      validator: function (val) {
        /* eslint-disable no-prototype-builtins */
        return val.every(function (item) {
          if (item.hasOwnProperty("text") === false) {
            console.error(
              '[VueText warn]: Invalid prop "texts": items should always contain text property.'
            );
            return false;
          }
          // Text localization is resolved if isTermKey is true.
          if (
            item.hasOwnProperty("isTermKey") &&
            typeof item.isTermKey !== "boolean"
          ) {
            console.error(
              '[VueText warn]: Invalid prop "texts": property "isTermKey" should be boolean.'
            );
            return false;
          }

          return true;
        });
        /* eslint-enable no-prototype-builtins */
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    sanitizedTexts: function () {
      return this.texts.map(function (item, index) {
        return {
          order: index + 1,
          text: item.isTermKey ? "Resources(item.text)" : item.text,
        };
      });
    },
    hasDefaultSlot: function () {
      return !!this.$slots.default;
    },
  },
});
</script>