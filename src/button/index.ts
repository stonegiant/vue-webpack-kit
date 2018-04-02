import Vue from 'vue';
import render from './index.html';
import { create } from '../util';

const Button = Vue.extend({
    ...render,

    props: {
        text: String,
    },
    data() {
        return {

        }
    },
    computed: {
        
    },
    methods: {
        
    }
})

export default create('button', Button);