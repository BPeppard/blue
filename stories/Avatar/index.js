import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar, Flexy } from '../../src/index.js'
import AvatarSpec from './specs/Avatar'

const stories = storiesOf('Avatar', module)
const fixture = AvatarSpec.generate()

stories.add('default', () => (
  <Avatar name={fixture.name} image={fixture.image} />
))

stories.add('status', () => (
  <div>
    <Flexy just='left'>
      <Avatar
        name={fixture.name}
        image={fixture.image}
        status='online'
        shape='square'
        size='lg'
      />
      <Avatar
        name={fixture.name}
        image={fixture.image}
        status='offline'
        size='lg'
      />
      <Avatar
        name={fixture.name}
        image={fixture.image}
        shape='rounded'
        status='busy'
        size='lg'
      />
    </Flexy><br />
    <Flexy just='left'>
      <Avatar
        name={fixture.name}
        image={fixture.image}
        status='online'
        shape='square'
      />
      <Avatar
        name={fixture.name}
        image={fixture.image}
        status='offline'
      />
      <Avatar
        name={fixture.name}
        image={fixture.image}
        shape='rounded'
        status='busy'
      />
    </Flexy><br />
    <Flexy just='left'>
      <Avatar
        name={fixture.name}
        image={fixture.image}
        status='online'
        shape='square'
        size='sm'
      />
      <Avatar
        name={fixture.name}
        image={fixture.image}
        status='offline'
        size='sm'
      />
      <Avatar
        name={fixture.name}
        image={fixture.image}
        shape='rounded'
        status='busy'
        size='sm'
      />
    </Flexy>
  </div>
))

stories.add('initials', () => (
  <Avatar name={fixture.name} />
))

stories.add('sizes', () => (
  <div>
    <Avatar name={fixture.name} size='lg' />
    <Avatar name={fixture.name} size='md' />
    <Avatar name={fixture.name} size='sm' />
  </div>
))

stories.add('border', () => (
  <div>
    <Avatar name={fixture.name} size='lg' borderColor='red' />
  </div>
))