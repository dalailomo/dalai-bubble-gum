import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button } from '../components/Button';

storiesOf('Button', module)
    .add('Default', () => (
        <div>
            <Button>Chew it!</Button>
            &nbsp;
            <Button info>Chew it!</Button>
            &nbsp;
            <Button success>Chew it!</Button>
            &nbsp;
            <Button warning>Chew it!</Button>
            &nbsp;
            <Button danger>Chew it!</Button>
        </div>
    ))
