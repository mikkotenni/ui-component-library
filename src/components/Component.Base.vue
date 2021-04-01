<script>
import Vue from "vue";
import _ from "underscore";

export default Vue.extend({
  name: "ComponentBase",
  props: {
    modifiers: {
      // type: Object
    },
  },
  data() {
    return {
      isMounted: false,
    };
  },
  computed: {
    /**
     * Returns a modifier class object. Uses the "modifiers" value
     * to create that class object.
     *
     * Returns e.g.
     * {
     *  'button--primary: true
     * }
     *
     * @returns {object} a modifier class object
     */
    modifierClasses: function () {
      if (!this.$options.styleGuideName) {
        console.error(
          'Set "styleGuideName" attribute in "' +
            this.$options.name +
            '" component to use the "modifierClasses" property.'
        );
        return undefined;
      }
      return this.getModifierClasses(
        this.$options.styleGuideName,
        this.modifiers
      );
    },
  },
  methods: {
    // Following method should really be in Common.ComponnentUtils.js but we don't have that yet.
    getModifierClasses(component, modifiers) {
      if (typeof modifiers === "string") {
        // Convert a string into an object, e.g.
        // "primary disabled" ->
        // {
        //   primary: true,
        //   disabled: true
        // }
        modifiers = _.object(
          _.map(modifiers.split(" "), function (modifier) {
            return [modifier, true];
          })
        );
      }

      // Add the component name into keys, e.g.
      // { primary: true } -> { 'button--primary': true }
      return _.object(
        _.map(modifiers, function (val, key) {
          return [component + "--" + key, val];
        })
      );
    },
  },
});
</script>