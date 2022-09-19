import type { ComponentProps } from 'svelte';
import type Component from './Header.svelte';

export declare class HeaderComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'style' | 'ripple'
  > &
    ComponentProps<Component>;
}
