import Vue from 'vue';
import { prefix } from './config';

export function create(name: string, component) {
    const options = component.options || component;
    options.name = prefix + name;
    options.install = Vue => {
        Vue.component(options.name, options);
    };
    options.registration = {
        [options.name]: options
    };
    return options;
}