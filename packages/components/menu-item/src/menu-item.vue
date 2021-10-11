
<template>
    <div class="fi-menu-item">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, shallowRef, watch, ref,computed, onMounted } from 'vue';
import { menuItemEmits, menuItemProps } from './menu-item'

export default defineComponent({
    name: "MenuItem",
    props: menuItemEmits,
    emits: menuItemProps,
    setup(props, { emit }) {
        onMounted(() => {
            // TODO: 
        })
    }
});
</script>


<style>
</style>