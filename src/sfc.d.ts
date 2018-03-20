declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module '*.html' {
    import Vue, { VNode, CreateElement } from 'vue';
    const Render: {
        render: (this: Vue, createElement: CreateElement) => VNode;
        staticRenderFns: ((createElement: CreateElement) => VNode)[];
    };
    export default Render;
}
