import React from 'react';
import { storiesOf } from '@storybook/react';
import SigninHero from './';

storiesOf('Components/Sign in/Hero', module)
  .add('Base', () => <SigninHero></SigninHero>)