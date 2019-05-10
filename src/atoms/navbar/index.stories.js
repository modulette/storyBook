import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './';


storiesOf('Atoms/Navbar', module)
  .add('Container', () =>  <Navbar></Navbar>)