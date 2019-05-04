import React from 'react';
import { storiesOf } from '@storybook/react';
import SigninHeader from './';

storiesOf('Components/Sign in/Header', module)
  .add('Base', () => <SigninHeader></SigninHeader>)