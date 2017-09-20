import React from 'react';

import { storiesOf } from '@storybook/react';

import Expander, { Summary, Details } from '../components/Expander';

storiesOf('Expander', module)
    .add('Closed expander', () => (
        <Expander summary="This is the summary">
          <div>These are the details of the thingy.</div>
        </Expander>
    ))

    .add('Opened expander', () => (
        <Expander opened summary="This is the summary">
          <div>These are the details of the thingy.</div>
        </Expander>
    ))
