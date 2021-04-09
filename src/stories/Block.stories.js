import Block from '../components/library/Block.vue';

export default {
  title: 'Small ones/Block',
  component: Block,
};

const Template = (args, { argTypes }) => ({
  components: { Block },
  props: Object.keys(argTypes),
  template: '<Block/>',
});

export const Default = Template.bind({});
Default.args = {};