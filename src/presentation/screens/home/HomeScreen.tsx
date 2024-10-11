import React from 'react';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';

const HomeScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Button accessoryLeft={<Icon name="facebook" />}>Cerrar sesion</Button>
    </Layout>
  );
};

export default HomeScreen;
