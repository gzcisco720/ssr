import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../client/components/User/wrapper';
import UserLgoin from '../client/components/User/user-login';

const stories = storiesOf('User', module);

stories.addDecorator(withKnobs);

stories.add('User Wrapper', () => (
  <Wrapper />
));

stories.add('User Login', () => (
  <UserLgoin />
));
