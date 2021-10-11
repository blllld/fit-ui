import type { ExtractPropTypes } from 'vue'


export const menuProps= []
export const menuEmits = {}

export type MenuProps = ExtractPropTypes<typeof menuProps>
export type MenuEmits = typeof menuEmits