import React from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {ContainerPage, ContainerImage, ImageBG, Subtitle} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Modal from '../../components/Modal';
import Input from '../../components/Input';

const Home: React.FC = () => {
  return (
    <ContainerPage>
      <ScrollView>
        <View>
          <Title> Who we are? </Title>

          <Subtitle>
            Our main objective is to contribute to the construction of a more
            just and inclusive society.
          </Subtitle>

          <Subtitle>
            An initiative that counts on volunteers daily supporting the cause,
            and sustaining itself through donations, partnerships and a space
            provided.
          </Subtitle>
        </View>

        <ContainerImage>
          <ImageBG source={require('../../assets/img/skateboard.png')} />
        </ContainerImage>
        <View>
          <Modal title="Volunteer">
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
              <Input
                label="Contact phone"
                placeholder="81999999999"
                type="tel"
              />
            </View>
            <View>
              <Button
                type="primary"
                onPress={() => {
                  Alert.alert('Submited succesfully!');
                }}>
                Submit
              </Button>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </ContainerPage>
  );
};

export default Home;
