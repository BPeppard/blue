import React, {PureComponent as Component} from 'react'
import PropTypes from 'prop-types'
import Body from './Body'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Animate from '../Animate'
import Card from '../Card'
import CloseButton from '../CloseButton'
import EventListener from '../EventListener'
import Overlay from '../Overlay'
import PortalWrapper from '../PortalWrapper'
import classNames from '../../utilities/classNames'
import { noop } from '../../utilities/other'
import { propTypes as portalTypes } from '../Portal'
import { isNodeElement, hasContentOverflowY } from '../../utilities/node'
import getScrollbarWidth from '../../vendors/getScrollbarWidth'

export const propTypes = Object.assign({}, portalTypes, {
  closeIcon: PropTypes.bool,
  seamless: PropTypes.bool,
  closeIconRepositionDelay: PropTypes.number,
  modalAnimationDelay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  overlayAnimationDelay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  trigger: PropTypes.element,
  wrapperClassName: PropTypes.string
})

const defaultProps = {
  closeIcon: true,
  seamless: false,
  isOpen: false,
  closeIconRepositionDelay: 50,
  modalAnimationDelay: {
    in: 200,
    out: 100
  },
  overlayAnimationDelay: {
    in: 100,
    out: 200
  },
  onScroll: noop,
  wrapperClassName: 'c-ModalWrapper'
}

const childContextTypes = {
  positionCloseNode: PropTypes.func
}

const modalBaseZIndex = 1040
const portalOptions = {
  id: 'Modal',
  timeout: 40,
  zIndex: modalBaseZIndex
}

const scrollbarWidth = getScrollbarWidth()

class Modal extends Component {
  constructor () {
    super()
    this.closeNode = null
    this.scrollableNode = null
    this.handleOnResize = this.handleOnResize.bind(this)
    this.positionCloseNode = this.positionCloseNode.bind(this)
  }

  componentDidMount () {
    this.positionCloseNode()
  }

  /* istanbul ignore next */
  handleOnResize () {
    this.positionCloseNode()
  }

  positionCloseNode (scrollableNode) {
    const { modalAnimationDelay, closeIconRepositionDelay } = this.props
    const scrollNode = scrollableNode || this.scrollableNode
    if (
      !this.closeNode ||
      !isNodeElement(scrollNode)
    ) return

    let delay = modalAnimationDelay && modalAnimationDelay.in
    /* istanbul ignore next */
    delay = delay < modalAnimationDelay ? delay : closeIconRepositionDelay

    const defaultOffset = 8
    const borderOffset = 2

    setTimeout(() => {
      const offset = hasContentOverflowY(scrollNode)
        ? /* istanbul ignore next */ `${scrollbarWidth + borderOffset}px`
        : `${defaultOffset}px`

      this.closeNode.style.right = offset
    }, delay)
  }

  getChildContext () {
    return {
      positionCloseNode: this.positionCloseNode
    }
  }

  render () {
    const {
      children,
      className,
      closeIcon,
      closeIconRepositionDelay,
      closePortal,
      exact,
      isOpen,
      modalAnimationDelay,
      onClose,
      onScroll,
      openPortal,
      overlayAnimationDelay,
      path,
      portalIsMounted,
      portalIsOpen,
      seamless,
      style,
      timeout,
      trigger,
      wrapperClassName,
      zIndex,
      ...rest
    } = this.props

    const handleOnResize = this.handleOnResize

    const componentClassName = classNames(
      'c-Modal',
      isOpen && 'is-open',
      className
    )

    const closeMarkup = closeIcon ? (
      <div
        className='c-Modal__close'
        ref={node => { this.closeNode = node }}
      >
        <CloseButton onClick={closePortal} />
      </div>
    ) : null

    const modalStyle = style ? Object.assign({}, style, {
      zIndex
    }) : { zIndex }

    const parsedChildren = React.Children.map(children, child => {
      if (child && (child.type === Content || child.type === Body)) {
        return React.cloneElement(child, {
          scrollableRef: (node) => {
            this.scrollableNode = node
            child.props.scrollableRef(node)
          }
        })
      }

      return child
    })

    const modalContentMarkup = !seamless ? (
      <Card className='c-Modal__Card' seamless role='dialog'>
        {closeMarkup}
        {parsedChildren}
      </Card>
    ) : (
      <div className='c-Modal__innerContent' role='dialog'>
        {parsedChildren}
      </div>
    )

    return (
      <div className={componentClassName} role='document' style={modalStyle} {...rest}>
        <EventListener event='resize' handler={handleOnResize} />
        <div className='c-Modal__innerWrapper'>
          <Animate
            className='c-Modal__Card-container'
            easing='elastic'
            sequence='fade down'
            in={portalIsOpen}
            wait={modalAnimationDelay}
          >
            {modalContentMarkup}
          </Animate>
        </div>
        <Animate sequence='fade' in={portalIsOpen} wait={overlayAnimationDelay}>
          <Overlay onClick={closePortal} role='presentation' />
        </Animate>
      </div>
    )
  }
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps
Modal.childContextTypes = childContextTypes
Modal.displayName = 'Modal'

const ComposedModal = PortalWrapper(portalOptions)(Modal)
ComposedModal.Header = Header
ComposedModal.Body = Body
ComposedModal.Content = Content
ComposedModal.Footer = Footer

export const ModalComponent = Modal
export default ComposedModal
