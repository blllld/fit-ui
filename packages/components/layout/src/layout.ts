import type { ExtractPropTypes } from 'vue'


export const layoutProps= []
export const layoutEmits = {}

export type LayoutProps = ExtractPropTypes<typeof layoutProps>
export type LayoutEmits = typeof layoutEmits