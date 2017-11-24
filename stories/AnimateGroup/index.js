import React from 'react'
import { storiesOf } from '@storybook/react'
import { Animate, AnimateGroup } from '../../src/index.js'

const stories = storiesOf('AnimateGroup', module)

stories.add('default', () => (
  <div>
    <p>Stagger fade in</p>
    <AnimateGroup stagger staggerDelay={500}>
      <Animate sequence='fadeIn'>
        <div>Fade in</div>
      </Animate>
      <Animate sequence='fadeIn'>
        <div>Fade in</div>
      </Animate>
      <Animate sequence='fadeIn'>
        <div>Fade in</div>
      </Animate>
      <Animate sequence='fadeIn'>
        <div>Fade in</div>
      </Animate>
    </AnimateGroup>
  </div>
))