import * as PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenExist,
  createShorthandFactory,
  UIComponent,
  UIComponentProps,
  ChildrenComponentProps,
  ContentComponentProps,
  commonPropTypes,
  rtlTextContainer,
} from '../../lib'
import { ReactProps, ComponentEventHandler } from '../../types'

export interface AccordionContentProps
  extends UIComponentProps,
    ChildrenComponentProps,
    ContentComponentProps {
  /** Whether or not the content is visible. */
  active?: boolean

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: ComponentEventHandler<AccordionContentProps>
}

/**
 * A standard AccordionContent.
 */
class AccordionContent extends UIComponent<ReactProps<AccordionContentProps>, any> {
  static displayName = 'AccordionContent'

  static create: Function

  static className = 'ui-accordion__content'

  static propTypes = {
    ...commonPropTypes.createCommon(),
    active: PropTypes.bool,
    onClick: PropTypes.func,
  }

  renderComponent({ ElementType, classes, unhandledProps }) {
    const { children, content } = this.props

    return (
      <ElementType
        {...rtlTextContainer.getAttributes({ forElements: [children, content] })}
        {...unhandledProps}
        className={classes.root}
      >
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  }
}

AccordionContent.create = createShorthandFactory({
  Component: AccordionContent,
  mappedProp: 'content',
})

export default AccordionContent
