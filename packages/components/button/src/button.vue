
<template>
    <div class="fi-button">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, shallowRef, watch, ref,computed, onMounted } from 'vue';
import { buttonEmits, buttonProps } from './button'

export default defineComponent({
    name: "Button",
    props: buttonEmits,
    emits: buttonProps,
    setup(props, { emit }) {
        onMounted(() => {
            // TODO: 
        })
    }
});
</script>


<style>
</style>