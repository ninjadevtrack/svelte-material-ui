import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './TabScroller.svelte';

export declare class TabScrollerComponentDev
  extends Component
  implements SmuiComponent
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'align'
  > & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    > as `scrollArea\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    >[k];
  } & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    > as `scrollContent\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    >[k];
  } & ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
