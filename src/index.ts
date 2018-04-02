import Button from './button';

const components = [
    Button
]

export default function install (Vue) {
    components.map((component) => {Vue.use(component)});
}