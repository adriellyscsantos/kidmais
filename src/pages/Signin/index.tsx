import React, {useCallback} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ContainerPage, ContainerButtons, Container} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';

const Signin: React.FC = () => {
  const {navigate} = useNavigation();

  const navigationSignIn = useCallback(() => {
    navigate('Main');
  }, [navigate]);

  const navigationBack = useCallback(() => {
    navigate('Initial');
  }, [navigate]);

  return (
    <ContainerPage>
      <ContainerButtons>
        <View>
          <Title> Sign in to Helpier!</Title>
        </View>
        <View>
          <Input label="E-mail" placeholder="xxx@xxxx.com" type="email" />
          <Input label="Password" placeholder="*****" type="password" />
        </View>
        <Container>
          <Button
            type="secondary"
            onPress={() => {
              navigationBack();
            }}>
            Back
          </Button>
          <Button
            type="primary"
            onPress={() => {
              navigationSignIn();
            }}>
            Sign in
          </Button>
        </Container>
      </ContainerButtons>
    </ContainerPage>
  );
};

export default Signin;
