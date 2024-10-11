import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MyIcon from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/StackNavigation';

interface LoginScreenProps
  extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {height} = useWindowDimensions();

  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor,ingrese para continuar</Text>
        </Layout>

        <Layout style={styles.containerInputs}>
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
            Ingresar
          </Button>
        </Layout>
        <Layout style={styles.spacer50} />
        <Layout style={styles.containerNewAccount}>
          <Text>¿No tienes cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            Crea una
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
