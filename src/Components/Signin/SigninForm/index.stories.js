import React from 'react';
import { storiesOf } from '@storybook/react';
import SigninForm from './';

storiesOf('Components/Sign in/Form', module)
  .add('Base', () => <SigninForm></SigninForm>)