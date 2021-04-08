<template>
  <div class="vue-block">
    <div class="vue-block__title-bar">
      <div class="vue-block__title">
        {{ sanitizedTitle | stripHtml }}
      </div>
      <div v-if="sanitizedActions" class="vue-block__actions-menu">
        <vue-popper :manual="true">
          <i class="fas fa-ellipsis-h"></i>
          <template v-slot:popup>
            <div class="popup-menu">
              <div
                v-for="item in sanitizedActions"
                :key="item.order"
                class="popup-menu__item"
                @click="startAction(item.action)"
              >
                {{ item.text | stripHtml }}
              </div>
            </div>
          </template>
        </vue-popper>
      </div>
      <div
        v-if="canEdit"
        class="vue-block__edit"
        @click="startEdit"
        v-on:keyup.enter="startEdit"
        tabindex="0"
      >
        <i class="far fa-edit"></i>
      </div>
      <div
        v-else-if="defaultActionIcon"
        class="vue-block__edit"
        @click="$emit('default-action')"
      >
        <i :class="defaultActionIcon"></i>
      </div>
    </div>

    <div class="vue-block__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VuePopper from "@/components/library/Popper.vue";
import ComponentBase from "@/components/Component.Base.vue";

/*
 * Todo: Handle Resources calls in more elegant manner. Translations do not need to work
 * but let's have some sort of mechanism for handling the calls as they are frequently
 * used in main solution.
 */
const Resources = function (t) {
  return "[" + t + "]";
};

// Don't raise ESLint errors on following undeclared variables of shared resources:
/* global Sympa */
// Todo: Again, some more elegant and more re-usable solution could be in order.
Vue.filter("stripHtml", function (value) {
  return Sympa.Helpers.stripHtml(value);
});

export default Vue.extend({
  name: "LibVueBlock",
  styleGuideName: "vue-block",
  mixins: [ComponentBase],
  components: { VuePopper },
  props: {
    title: {
      required: false,
      type: String,
      default: "",
    },
    titleIsTermKey: {
      required: false,
      type: Boolean,
      default: false,
    },
    actions: {
      /**
       * Example
       *
       * actions: [
       *  { text: 'Do something' },
       *  { text: 'Do_Something', isTermKey: true, action: 'myfancyactionname' }
       * ]
       *
       * Action designated for actions prop item can be listened in parent
       * component:
       * <vue-block @myfancyactionname="doSomethingFancy"></vue-block>
       */
      required: false,
      type: Array,
      default: null,
    },
    canEdit: {
      /**
       * Editing event emitted by this component is listened from parent component:
       * <vue-block @edit="doSomeEditing"></vue-block>
       */
      required: false,
      type: Boolean,
      default: false,
    },
    defaultActionIcon: {
      /**
       * This is ignored if "canEdit" is true, in that case edit
       * icon is shown as a default action icon.
       *
       * If default action icon is defined, that icon is shown in
       * block and clicking that icon triggers a "default-action"
       * event.
       *
       * Default event emitted by this component is listened from
       * parent component:
       * <vue-block default-action-icon="far fa-help" @default-action="doSomeEditing"></vue-block>
       */
      required: false,
      type: String,
      default: undefined,
    },
  },
  data: function () {
    return {};
  },
  computed: {
    sanitizedTitle: function () {
      return this.titleIsTermKey === true && this.title.length > 0
        ? Resources(this.title)
        : this.title;
    },
    sanitizedActions: function () {
      if (this.actions && this.actions.length > 0) {
        return this.actions.map(function (item, index) {
          return {
            order: index + 1,
            text: item.isTermKey ? Resources(item.text) : item.text,
            action: item.action ? item.action : null,
          };
        });
      }

      return null;
    },
  },
  methods: {
    startEdit: function () {
      this.$emit("edit");
    },
    startAction: function (action) {
      if (action !== null) {
        this.$emit(action);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>