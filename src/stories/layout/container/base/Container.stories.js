import React from 'react';

import ContainerComponent from '../../../../ui/layout/container/base/Container';
import Box from '../box/Box';

export default {
  title: 'Container',
  component: ContainerComponent
};

export const Container = () => (
    <ContainerComponent>
        <Box />
    </ContainerComponent>
);