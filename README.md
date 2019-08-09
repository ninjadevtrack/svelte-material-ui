# Svelte 3 Material UI Components

A work in progress library of Svelte 3 components for Material UI.

Here's the NPM package: https://www.npmjs.com/package/svelte-material-ui

## Demos

Check them out: https://hperrin.github.io/svelte-material-ui/demo/

## Usage

Here's some example code:

```html
<Button>Just a Button</Button>
<Button variant="raised"><Label>Raised Button, Using a Label</Label></Button>
<Button some-arbitrary-prop="placed on the actual button">Button</Button>

<Fab on:click="{() => alert('Clicked!')}" extended>
  <Icon style="margin-right: 12px;">favorite</Icon>
  <Label>Extended FAB</Label>
</Fab>

<Textfield
  bind:value={superText}
  label="Super Text"
  input$aria-controls="helper-text"
  input$aria-describedby="helper-text"
/>
<HelperText id="helper-text">What you put in this box will become super!</HelperText>

<script>
  import Button from 'svelte-material-ui/components/button';
  import Fab from 'svelte-material-ui/components/fab';
  import Textfield, {HelperText} from '../components/textfield';
  import {Label, Icon} from 'svelte-material-ui/components/common';

  let superText = '';
</script>
```

You can check out the [demo pages' source](https://github.com/hperrin/svelte-material-ui/tree/master/demo/component-demos) to see usage, since I haven't written the documentation yet.

Here are some juicy features:

* You can add any arbitrary property to nearly all of the components.
* You can add actions to the components with `use={[Action1, [Action2, action2Props]]}`.
* You can add props to lower components and elements with things like `input$maxlength="15"`.
* Ripples are on by default on interactive components, and can be turned off with `ripple={false}`.
* You can also add ripples to things with the Ripple Svelte action.
* All standard UI events are forwarded on most components, and input events are forwarded on input components.
* Things like labels and icons are named exports in each component, or you can use 'common/Label' and 'common/Icon'. (Except for textfield/select icons, because they are special snowflakes.)

To bundle this in your own code, you must have a `_smui-theme.scss` file in one of the Sass include paths. That is where you define the MDC theme variables. See the webpack config in this package for an example.

## Progress

I'm only going to do things that need to/can be Svelte-ified. For some things, like RTL and elevation, you can just use the MDC packages.

- [x] Buttons
  - [x] Floating Action Buttons
  - [x] Icon Buttons
- [x] Cards
- [x] Chips
- [ ] Data Tables
- [x] Dialogs
- [x] Drawers
- [ ] Grid Lists (Deprecated)
- [ ] Image List
- [x] Inputs and Controls
  - [x] Checkboxes
  - [x] Floating Label
  - [x] Form Fields
  - [x] Line Ripple
  - [x] Notched Outline
  - [x] Radio Buttons
  - [x] Select Menus
    - [x] Select Helper Text
    - [x] Select Icon
  - [x] Sliders
  - [x] Switches
  - [x] Text Field
    - [x] Text Field Character Counter
    - [x] Text Field Helper Text
    - [x] Text Field Icon
- [ ] Layout Grid
- [x] Linear Progress
- [x] Lists
- [x] Menu Surface
- [x] Menus
- [x] Ripples
- [ ] Snackbars
- [x] Tabs
  - [x] Tab
  - [x] Tab Bar
  - [x] Tab Indicator
  - [x] Tab Scroller
- [x] Theme
- [x] Top App Bar
- [x] Typography

## Other Svelte UI Projects

Svelte UI libraries are really starting to make good progress. Check out this Fomantic-UI component library:

https://github.com/titans-inc/sveltemantic

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