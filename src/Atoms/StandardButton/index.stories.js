import React from 'react';
import { storiesOf } from '@storybook/react';
import ModuletteButton from './';
import { withKnobs, number } from '@storybook/addon-knobs';


const width = number('Width', 100, { range: true, min: 10, max: 500, step: 5 });
storiesOf('Atoms/StandardButton', module)
  .addDecorator(withKnobs)
  .add('With glow', () => <ModuletteButton glow width={width+"px"} type="button" label="Click me"></ModuletteButton>)
  .add('Without glow', () =>  <ModuletteButton type="button" width={width+"px"} label="Click me"></ModuletteButton>)