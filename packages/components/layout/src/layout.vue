
<template>
    <div class="fi-layout">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, shallowRef, watch, ref,computed, onMounted } from 'vue';
import { layoutEmits, layoutProps } from './layout'

export default defineComponent({
    name: "Layout",
    props: layoutEmits,
    emits: layoutProps,
    setup(props, { emit }) {
        onMounted(() => {
            // TODO: 
        })
    }
});
</script>


<style>
</style>