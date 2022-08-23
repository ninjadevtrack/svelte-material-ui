import type { SmuiComponentDev } from '@smui/common';
import type { ButtonComponentDev } from '@smui/button';
import type { IconButtonComponentDev } from '@smui/icon-button';
import type { SnackbarComponentDev } from '../Snackbar.types.js';
import type Component from './Kitchen.svelte';

export declare class KitchenComponentDev
  extends Component
  implements SmuiComponentDev
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: {
    [k in keyof SnackbarComponentDev['$$prop_def'] as `snackbar\$${k}`]?: SnackbarComponentDev['$$prop_def'][k];
  } & {
    [k in keyof ButtonComponentDev['$$prop_def'] as `action\$${k}`]?: ButtonComponentDev['$$prop_def'][k];
  } & {
    [k in keyof IconButtonComponentDev['$$prop_def'] as `dismiss\$${k}`]?: IconButtonComponentDev['$$prop_def'][k];
  } & Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}

import type { MDCSnackbarCloseEvent } from '@material/snackbar';
import type Snackbar from '../Snackbar.svelte';

export interface ConfigAction {
  text: string;
  onClick?: (e: MouseEvent) => void;
  [k: string]: any;
}

export type Config = {
  props?: Snackbar['$$prop_def'];
  onClose?: (e: MDCSnackbarCloseEvent) => void;
  onDismiss?: (e: MouseEvent) => void;
  actions?: ConfigAction[];
  dismissButton?: boolean;
  dismissTitle?: string;
  dismissText?: string;
  label?: string;
};
