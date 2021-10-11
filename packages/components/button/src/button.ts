import type { ExtractPropTypes } from 'vue'


export const buttonProps= []
export const buttonEmits = {}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits