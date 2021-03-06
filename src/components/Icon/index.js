import React from 'react'
import PropTypes from 'prop-types'
import ICONS from './icons'
import VisuallyHidden from '../VisuallyHidden'
import classNames from '../../utilities/classNames'
import { noop } from '../../utilities/other'
import { textShadeTypes } from '../../constants/propTypes'
import { sizeTypes } from './propTypes'

export const propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  ignoreClick: PropTypes.bool,
  faint: PropTypes.bool,
  inline: PropTypes.bool,
  muted: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  shade: textShadeTypes,
  size: sizeTypes,
  subtle: PropTypes.bool,
  title: PropTypes.string,
  withCaret: PropTypes.bool
}

const defaultProps = {
  center: false,
  clickable: false,
  ignoreClick: true,
  muted: false,
  name: null,
  onClick: noop,
  size: '20',
  withCaret: false
}

const Icon = props => {
  const {
    center,
    className,
    clickable,
    faint,
    ignoreClick,
    inline,
    muted,
    onClick,
    name,
    shade,
    size,
    subtle,
    title,
    withCaret,
    ...rest
  } = props

  const componentClassName = classNames(
    'c-Icon',
    center && 'is-center',
    clickable && 'is-clickable',
    !clickable && ignoreClick && 'is-noInteract',
    faint && 'is-faint',
    inline && 'is-inline',
    muted && 'is-muted',
    shade && `is-${shade}`,
    subtle && 'is-subtle',
    size && `is-${size}`,
    withCaret && 'is-withCaret',
    className
  )

  const src = { __html: ICONS[name] }
  const iconTitle = title || name

  const caretMarkup = withCaret ? (
    <span
      className='c-Icon__icon is-caret'
      dangerouslySetInnerHTML={{__html: ICONS['caret-down']}}
      title='Caret'
    />
  ) : null

  return (
    <span
      className={componentClassName}
      onClick={onClick}
      data-icon-name={name}
      {...rest}
    >
      <span
        className='c-Icon__icon'
        dangerouslySetInnerHTML={src}
        title={iconTitle}
      />
      {caretMarkup}
      <VisuallyHidden>{iconTitle}</VisuallyHidden>
    </span>
  )
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
