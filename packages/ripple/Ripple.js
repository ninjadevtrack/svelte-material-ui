import {MDCRipple} from '@material/ripple';

export default function Ripple(node, [ripple, props = {unbounded: false, color: null}]) {
  let instance = null;

  function handleProps(ripple, props) {
    if (ripple && !instance) {
      instance = new MDCRipple(node);
    } else if (instance && !ripple) {
      instance.destroy();
      instance = null;
    }
    if (ripple) {
      instance.unbounded = !!props.unbounded;
      switch (props.color) {
        case 'surface':
          node.classList.add('mdc-ripple-surface');
          node.classList.remove('mdc-ripple-surface--primary');
          node.classList.remove('mdc-ripple-surface--accent');
          return;
        case 'primary':
          node.classList.add('mdc-ripple-surface');
          node.classList.add('mdc-ripple-surface--primary');
          node.classList.remove('mdc-ripple-surface--accent');
          return;
        case 'secondary':
          node.classList.add('mdc-ripple-surface');
          node.classList.remove('mdc-ripple-surface--primary');
          node.classList.add('mdc-ripple-surface--accent');
          return;
      }
    }
    node.classList.remove('mdc-ripple-surface');
    node.classList.remove('mdc-ripple-surface--primary');
    node.classList.remove('mdc-ripple-surface--accent');
  }

  if (ripple) {
    handleProps(ripple, props);
  }

  return {
    update([ripple, props = {unbounded: false, color: null}]) {
      handleProps(ripple, props);
    },

    destroy() {
      if (instance) {
        instance.destroy();
        instance = null;
        node.classList.remove('mdc-ripple-surface');
        node.classList.remove('mdc-ripple-surface--primary');
        node.classList.remove('mdc-ripple-surface--accent');
      }
    }
  }
}