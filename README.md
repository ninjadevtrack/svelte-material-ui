# Svelte 3 Material UI Components

A work in progress library of Svelte 3 components for Material UI.

Here's the NPM package: https://www.npmjs.com/package/svelte-material-ui

## Demos

Check them out: https://hperrin.github.io/svelte-material-ui/demo/

## Usage

Here's some code:

```html
<Button>Just a Button</Button>
<Button raised><Label>Raised Button, Using a Label</Label></Button>
<Button some-arbitrary-prop="placed on the actual button">Button</Button>

<Fab on:click="{() => alert('Clicked!')}" extended>
  <Icon style="margin-right: 12px;">favorite</Icon>
  <Label>Extended FAB</Label>
</Fab>

<script>
  import Button from 'svelte-material-ui/components/button';
  import Fab from 'svelte-material-ui/components/fab';
  import {Label, Icon} from 'svelte-material-ui/components/common';
</script>
```

You can check out the demo pages to see usage, since I haven't written the documentation yet.

Here are some juicy features:

* You can add any arbitrary property to nearly all of the components.
* You can add actions to the components with `use={[Action1, [Action2, action2Props]]}`.
* Ripples are on by default on interactive components, and can be turned off with `ripple={false}`.
* You can also add ripples to things with the Ripple Svelte action.
* All standard UI events are forwarded on most components, and input events are forwarded on input components.
* Things like labels and icons are named exports in each component, or you can use 'common/Label' and 'common/Icon'.
* I try very hard to keep you from having to write an actual HTML element or CSS class, so most things are done through Svelte components and properties, with actions being the last resort.

To bundle this in your own code, you must use the `svelte-preprocess` package. See the webpack config in this package for an example.

## Progress

I'm only going to do things that need to/can be Svelte-ified. For some things, like RTL and elevation, you can just use the MDC packages.

- [x] Buttons
  - [x] Floating Action Buttons
  - [x] Icon Buttons
- [x] Cards
- [x] Chips
- [x] Dialogs
- [ ] Drawers
- [ ] Grid Lists
- [ ] Image Lists
- [ ] Inputs and Controls
  - [x] Checkboxes
  - [ ] Floating Label
  - [x] Form Fields
  - [ ] Line Ripple
  - [ ] Notched Outline
  - [x] Radio Buttons
  - [ ] Select Menus
    - [ ] Select Helper Text
    - [ ] Select Icon
  - [ ] Sliders
  - [ ] Switches
  - [ ] Text Field
    - [ ] Text Field Character Counter
    - [ ] Text Field Helper Text
    - [ ] Text Field Icon
- [ ] Layout Grid
- [ ] Linear Progress
- [x] Lists
- [ ] Menu Surface
- [ ] Menus
- [x] Ripples
- [ ] Snackbars
- [ ] Tabs
  - [ ] Tab
  - [ ] Tab Bar
  - [ ] Tab Indicator
  - [ ] Tab Scroller
- [ ] Theme
- [ ] Toolbars (deprecated)
- [ ] Top App Bar
- [x] Typography

## License

Copyright 2019 Hunter Perrin

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.