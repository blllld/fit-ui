
<template>
    <div class="fi-menu">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, shallowRef, watch, ref,computed, onMounted } from 'vue';
import { menuEmits, menuProps } from './menu'

export default defineComponent({
    name: "Menu",
    props: menuEmits,
    emits: menuProps,
    setup(props, { emit }) {
        onMounted(() => {
            // TODO: 
        })
    }
});
</script>


<style>
</style>