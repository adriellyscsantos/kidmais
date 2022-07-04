import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  ContainerPage,
  ContainerButtons,
  Container,
  ContainerImage,
  ImageBG,
  Title,
  Subtitle,
} from './styles';
import Button from '../../components/Button';

const Initial: React.FC = () => {
  const {navigate} = useNavigation();

  const navigationSignIn = useCallback(() => {
    navigate('Signin');
  }, [navigate]);

  const navigationSignUp = useCallback(() => {
    navigate('Signup');
  }, [navigate]);

  return (
    <ContainerPage>
      <View>
        <Title> Welcome to Helpier! </Title>
      </View>
      <ContainerImage>
        <ImageBG source={require('../../assets/img/children-white.png')} />
      </ContainerImage>

      <ContainerButtons>
        <View>
          <Subtitle>
            Be a contributor to our project and help hundreds of people!
          </Subtitle>
        </View>
        <Container>
          <Button
            type="secondary"
            onPress={() => {
              navigationSignIn();
            }}>
            Sign in
          </Button>
          <Button
            type="primary"
            onPress={() => {
              navigationSignUp();
            }}>
            Sign Up
          </Button>
        </Container>
      </ContainerButtons>
    </ContainerPage>
  );
};

export default Initial;
