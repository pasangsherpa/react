import { Accessibility } from '../../interfaces'
import * as keyboardKey from 'keyboard-key'

const RadioBehavior: Accessibility = (props: any) => ({
  attributes: {
    root: {
      role: 'presentation',
    },
    label: {
      role: 'presentation',
    },
    input: {
      tabIndex: props.checked ? '0' : '-1',
      'aria-checked': props.checked,
    },
  },

  keyActions: {
    anchor: {
      performClick: {
        keyCombinations: [{ keyCode: keyboardKey.Enter }, { keyCode: keyboardKey.Spacebar }],
      },
    },
  },
})

export default RadioBehavior
