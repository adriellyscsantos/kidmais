import React, {useCallback} from 'react';
import {View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ContainerPage, Container, Subtitle} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';

const Donate: React.FC = () => {
  const {navigate} = useNavigation();

  const navigationHome = useCallback(() => {
    navigate('Home');
  }, [navigate]);

  return (
    <ContainerPage>
      <Container>
        <View>
          <Title> Donate</Title>
          <Subtitle>
            Fill in your details and become a donor. We will contact you!
          </Subtitle>
        </View>
        <View>
          <Input
            label="Full name"
            placeholder="Type your full name"
            type="text"
          />
          <Input label="E-mail" placeholder="xxxx@xxxx.com" type="email" />
          <Input label="Contact phone" placeholder="81999999999" type="tel" />
        </View>
        <View>
          <Button
            type="primary"
            onPress={() => {
              Alert.alert('We will contact you!');
              navigationHome();
            }}>
            I want to donate
          </Button>
        </View>
      </Container>
    </ContainerPage>
  );
};

export default Donate;
