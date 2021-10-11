import { NOOP } from '@vue/shared'
import type { Plugin } from 'vue';

type SFC<T> = { name: string } & T & Plugin;

export const makeInstall = <T, E = Record<string, any>>(main: T, extra?: E) => {
    (main as SFC<T>).install = (app) => {
        for (const comp of [main, ...Object.values(extra ?? {} as SFC<T>)]) {
            app.component(comp.name, comp);
        }
    }
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            (main as SFC<T>)[key] = comp;
        }
    }
    return main;
}


export const makeNoopInstall = <T>(main: T) => {
    (main as SFC<T>).install = (app) => NOOP;
    return main;
}