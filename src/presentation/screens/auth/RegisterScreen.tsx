import {StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import React from 'react';
import {Input, Layout, Text, Button} from '@ui-kitten/components';
import MyIcon from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/StackNavigation';

interface RegisterScreenProps
  extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const {height} = useWindowDimensions();

  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Layout style={{paddingTop: height * 0.3}}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Por favor,crea una cuenta para continuar</Text>
        </Layout>

        <Layout style={styles.containerInputs}>
          <Input
            placeholder="Nombre"
            accessoryLeft={<MyIcon name="person-outline" />}
            style={styles.input}
          />
          <Input
            placeholder="Correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="email-outline" />}
            style={styles.input}
          />
          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="lock" />}
            secureTextEntry
            style={styles.input}
          />
        </Layout>

        <Layout style={styles.spacer20} />

        <Layout>
          <Button
            onPress={() => {
              console.log('Ingresar');
            }}
            accessoryRight={<MyIcon white name="arrow-forward-outline" />}>
            Crear
          </Button>
        </Layout>
        <Layout style={styles.spacer50} />
        <Layout style={styles.containerNewAccount}>
          <Text>¿Ya tienes una cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => {
              navigation.goBack();
            }}>
            ingresar
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 40,
  },
  containerInputs: {
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
  },
  spacer20: {
    marginTop: 20,
  },
  spacer50: {
    marginTop: 20,
  },
  containerNewAccount: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {},
});
