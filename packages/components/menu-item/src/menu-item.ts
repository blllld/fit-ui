import type { ExtractPropTypes } from 'vue'


export const menuItemProps= []
export const menuItemEmits = {}

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
export type MenuItemEmits = typeof menuItemEmits