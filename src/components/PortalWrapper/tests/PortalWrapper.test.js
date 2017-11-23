import React from 'react'
import { mount } from 'enzyme'
import PortalWrapper from '..'
import classNames from '../../../utilities/classNames'

const TestButton = props => {
  const { className } = props
  const componentClassName = classNames(
    'button',
    className
  )
  const handleClick = () => {
    console.log('wee')
  }
  return (
    <button className={componentClassName} onClick={handleClick}>Click</button>
  )
}

afterEach(() => {
  document.body.innerHTML = ''
  document.body.style.overflow = null
})

describe('HOC', () => {
  test('Can create a component as a HOC', () => {
    const TestComponent = PortalWrapper()(TestButton)
    mount(<TestComponent isOpen />)
    const c = document.body.childNodes[0]

    expect(c.querySelector('button')).toBeTruthy()
  })
})

describe('ClassName', () => {
  test('Can pass className to composed component', () => {
    const TestComponent = PortalWrapper()(TestButton)
    mount(<TestComponent className='ron' isOpen />)

    const o = document.querySelector('.button')
    expect(o.classList.contains('ron')).toBeTruthy()
  })
})

describe('ID', () => {
  test('Adds default ID', () => {
    const TestComponent = PortalWrapper()(TestButton)
    mount(<TestComponent isOpen />)
    const c = document.body.childNodes[0]

    expect(c.id).toContain('PortalWrapper')
  })

  test('Override default ID with options', () => {
    const options = {
      id: 'Brick'
    }
    const TestComponent = PortalWrapper(options)(TestButton)
    mount(<TestComponent isOpen />)
    const c = document.body.childNodes[0]

    expect(c.id).toContain('Brick')
  })
})
