import type { ComponentType } from 'svelte';

import type { SmuiComponent } from '../smui.types.js';
import type { SmuiElementComponentDev } from '../SmuiElement.types.js';
import type { ClassAdderInternals } from './ClassAdder.types.js';
// @ts-ignore: Internals is exported... argh.
import ClassAdder, { internals } from './ClassAdder.svelte';

const defaults = { ...internals };

export function classAdderBuilder<
  T extends string = 'div',
  C extends ComponentType<SmuiComponent> = ComponentType<
    SmuiElementComponentDev<T>
  >
>(props: Partial<ClassAdderInternals<T, C>>): C {
  return new Proxy(ClassAdder, {
    construct: function (target, args) {
      Object.assign(internals, defaults, props);
      // @ts-ignore: Need spread arg.
      return new target(...args);
    },
    get: function (target, prop) {
      Object.assign(internals, defaults, props);
      return (target as any)[prop];
    },
  }) as C;
}
