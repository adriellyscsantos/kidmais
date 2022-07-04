import React from 'react';
import {View, ScrollView, Alert, Image} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {ContainerPage, Subtitle} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Modal from '../../components/Modal';
import Input from '../../components/Input';

const Contact: React.FC = () => {
  // const {navigate} = useNavigation();

  // const navigationDonate = useCallback(() => {
  //   navigate('Donate');
  // }, [navigate]);

  return (
    <ContainerPage>
      <ScrollView>
        <View style={{marginBottom: 30}}>
          <Title> Contact </Title>
          <Subtitle>Adress: R. Tal - 10050-150 Recife, PE</Subtitle>
          <Subtitle>Contact phone: 081 99999-9999</Subtitle>
          <Subtitle>E-mail: kidmais@program.com (Pix key)</Subtitle>
          <Subtitle>Instagram: @kidmaisprogram</Subtitle>
        </View>
        <View>
          <Subtitle>Adress: R. Tal - 10050-150 Recife, PE</Subtitle>

          <Image
            source={require('/assets/logo/contact-mail.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </View>

        <View>
          <Modal title="Donate">
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
                  Alert.alert('We will contact you!');
                }}>
                Donate
              </Button>
            </View>
          </Modal>
        </View>
        <View>
          <Image
            source={require('/assets/logo/contact-mail.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </View>
      </ScrollView>
    </ContainerPage>
  );
};

export default Contact;
