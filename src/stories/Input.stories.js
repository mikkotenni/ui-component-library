import Input from '../components/library/Input.vue';

export default {
  title: 'Small ones/Input',
  component: Input,
  argTypes: {
    disabled: {
      description: 'Sets CSS class and disabled attribute of input element.',
      table: {
        type: { 
            summary: 'bool'
        },
      },
    },
    modifiers: {
      description: 'An object for modifier classes. This prop is from base component mixin.',
      table: {
        type: {
          summary: 'object'
        },
        defaultValue: {
          summary: '{}'
        }
      }
    },
    name: {
      description: 'Set name attribute of input element.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: ''
        }
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Input },
  props: Object.keys(argTypes),
  template: '<Input v-bind="$props"/>',
});

export const Default = Template.bind({});
Default.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };