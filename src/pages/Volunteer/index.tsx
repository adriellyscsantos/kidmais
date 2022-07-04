import React, {useCallback} from 'react';
import {View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ContainerPage, Container, InputArea, InputLabel} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';

const Volunteer: React.FC = () => {
  const {navigate} = useNavigation();

  const navigationHome = useCallback(() => {
    navigate('Home');
  }, [navigate]);

  return (
    <ContainerPage>
      <Container>
        <View>
          <Title> Be volunteer!</Title>
        </View>
        <View>
          <Input
            label="Full name"
            placeholder="Type your full name"
            type="text"
          />
          <Input label="Email" placeholder="xxxx@xxxx.com" type="email" />
          <Input label="Contact phone" placeholder="81999999999" type="tel" />
          <InputLabel>Why do you want be a volunteer?</InputLabel>
          <InputArea placeholder="Type your text here" />
        </View>
        <View>
          <Button
            type="primary"
            onPress={() => {
              Alert.alert('Submited succesfully!');
              navigationHome();
            }}>
            Submit
          </Button>
        </View>
      </Container>
    </ContainerPage>
  );
};

export default Volunteer;
