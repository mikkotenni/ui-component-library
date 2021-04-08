<template>
  <input
    :type="type"
    class="input"
    :class="_.extend({ 'input--disabled': disabled }, modifierClasses)"
    :name="name"
    :disabled="disabled"
    v-model="editableValue"
    @focus="handleFocus"
    @blur="handleBlur"
    v-on="filteredParentListeners"
    ref="input"
  />
</template>

<script>
import Vue from "vue";
import ComponentBase from "@/components/Component.Base.vue";
import lodash from "lodash";

export default Vue.extend({
  name: "LibVueInput",
  mixins: [ComponentBase],
  styleGuideName: "input",
  props: {
    value: {},
    name: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data: function () {
    return {
      editableValue: undefined,
      hasFocus: false,
    };
  },
  mounted: function () {
    this.initEditableValue();
  },
  computed: {
    filteredParentListeners: function () {
      // Remove "input" listener from delegated listeners set
      var listeners = lodash.clone(this.$listeners);
      delete listeners.input;
      return listeners;
    },
    _() {
      return lodash;
    },
  },
  methods: {
    handleFocus: function () {
      this.hasFocus = true;
      this.$emit("focus");
    },
    handleBlur: function () {
      this.hasFocus = false;
      // Reformat value into the editor
      this.initEditableValue();
      this.$emit("blur");
    },
    initEditableValue: function () {
      // Handle potential async handling by wrapping into promise
      Promise.resolve(this.toEditableValue(this.value)).then(
        function (editableValue) {
          this.editableValue = editableValue;
        }.bind(this)
      );
    },
    updateModelValue: function () {
      // Handle potential async handling by wrapping into promise
      Promise.resolve(this.toModelValue(this.editableValue)).then(
        function (modelValue) {
          this.$emit("input", modelValue);
        }.bind(this)
      );
    },
    /**
     * Convert model value (e.g. number) into editable format
     * (e.g. string).
     *
     * This can be overridden in derived components.
     *
     * Can return a Promise as well.
     *
     * @param {any} modelValue - value in a model
     * @returns {any} value in suitable format for editing
     */
    toEditableValue: function (modelValue) {
      return modelValue;
    },
    /**
     * Convert editable value (e.g. string) into model value
     * (e.g. number).
     *
     * This can be overridden in derived components.
     *
     * Can return a Promise as well.
     *
     * @param {any} editableValue - value in edit
     * @return {any} value in suitable format to be used in
     * business logic (e.g. number or trimmed string)
     */
    toModelValue: function (editableValue) {
      if (editableValue == null) {
        return editableValue;
      }

      return editableValue.trim ? editableValue.trim() : editableValue;
    },
    handleEditableValueChange: function () {
      // When editable value changes for any reason,
      // update model value.
      this.updateModelValue();
    },
    focus: function () {
      this.$refs.input.focus();
    },
  },
  watch: {
    value: function () {
      // Model value changed. If a user is not editing this
      // input (no focus), re-init editable value.
      if (!this.hasFocus) {
        this.initEditableValue();
      }
    },
    editableValue: function () {
      this.handleEditableValueChange();
    },
  },
});
</script>