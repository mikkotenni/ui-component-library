/*
* Entry file for library build process.
* This could be App.vue but since we are sharing components globally, we'll
* keep things clean with this separate file. All library components are imported inside it.
*/

import Vue from 'vue';
// Import components to be included in library.
import SharedResourcesTest from '@/components/SharedResourcesTest.vue';
import HelloWorld from './HelloWorld.vue';

/*
* Add imported component as property so it can be registered as component.
* This means that when coponent library JavaScript file is loaded to browser, components are
* registered.
*/
const Components = {
  HelloWorld,
  SharedResourcesTest,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
