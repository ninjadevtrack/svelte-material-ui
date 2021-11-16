/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUIChipsChip:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIChipsChip:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onMDCChip:interaction']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onMDCChip:selection']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onMDCChip:removal']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onMDCChip:navigation']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}
