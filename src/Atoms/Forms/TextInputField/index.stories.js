import React from 'react';
import { storiesOf } from '@storybook/react';
import StandardInput from './';
import { withKnobs, number } from '@storybook/addon-knobs';


const width = number('Width', 150, { range: true, min: 10, max: 500, step: 5 });
storiesOf('Atoms/StandardInput', module)
  .addDecorator(withKnobs)
  .add('Type Text', () =>  <StandardInput  type="text" width={width +"px" } label="First Name" ></StandardInput>)