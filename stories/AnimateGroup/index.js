import React from 'react'
import { storiesOf } from '@storybook/react'
import { Animate, AnimateGroup, Card } from '../../src/index.js'

const stories = storiesOf('AnimateGroup', module)

stories.add('default', () => (
  <div>
    <p>Stagger fade in</p>
    <AnimateGroup stagger staggerDelay={500}>
      <Animate sequence='fade'>
        <div>Fade in</div>
      </Animate>
      <Animate sequence='fade left'>
        <div>Fade in + left</div>
      </Animate>
      <Animate sequence='fade'>
        <div>Fade in</div>
      </Animate>
      <Animate sequence='fade left'>
        <div>Fade in + left</div>
      </Animate>
    </AnimateGroup>
  </div>
))

stories.add('expand', () => (
  <div>
    <p>Stagger fade in</p>
    <div style={{margin: 'auto', width: '80%'}}>
      <Card>
        <div>Card</div>
      </Card>
      <AnimateGroup stagger staggerDelay={700}>
        <Animate sequence='fade up' duration={700}>
          <Card>
            <div>Expand, Up</div>
          </Card>
        </Animate>
        <Animate sequence='expand fade scale' duration={700}>
          <Card>
            <div>Expand, Fade, Scale</div>
          </Card>
        </Animate>
        <Animate sequence='expand fade left' duration={700}>
          <Card>
            <div>Expand, Fade, Left</div>
          </Card>
        </Animate>
        <Animate sequence='expand fade right' duration={700}>
          <Card>
            <div>Expand, Fade, Right</div>
          </Card>
        </Animate>
        <Animate sequence='expand fade down' duration={700}>
          <Card>
            <div>Expand, Fade, Down</div>
          </Card>
        </Animate>
      </AnimateGroup>
      <Card>
        <div>Card</div>
      </Card>
    </div>
  </div>
))
