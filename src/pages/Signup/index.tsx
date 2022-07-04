import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ContainerPage, ContainerButtons, Container} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';

const Signup: React.FC = () => {
  const {navigate} = useNavigation();

  const navigationSignUp = useCallback(() => {
    navigate('Main');
  }, [navigate]);

  const navigationBack = useCallback(() => {
    navigate('Initial');
  }, [navigate]);

  return (
    <ContainerPage>
      <ContainerButtons>
        <View>
          <Title> Sign up to Helpier!</Title>
        </View>
        <View>
          <Input label="E-mail" placeholder="xxx@xxxx.com" type="email" />

          <Input
            label="Password"
            placeholder="Type a password"
            type="password"
          />

          <Input
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
          />
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
              navigationSignUp();
            }}>
            Sign up
          </Button>
        </Container>
      </ContainerButtons>
    </ContainerPage>
  );
};

export default Signup;
