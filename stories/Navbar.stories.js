import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Navbar from '../client/components/Navbar';


const stories = storiesOf('Navbar', module);

stories.addDecorator(withKnobs);

stories.add('Normal Navbar', () => (
  <Navbar />
));
