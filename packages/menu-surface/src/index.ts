import type { ComponentType } from 'svelte';

import MenuSurface from './MenuSurface.svelte';
import type { MenuSurfaceComponentDev } from './MenuSurface.types.js';
export * from './MenuSurface.types.js';

import Anchor from './Anchor.js';
export * from './Anchor.js';

export default MenuSurface as ComponentType<MenuSurfaceComponentDev>;

export { Anchor };
