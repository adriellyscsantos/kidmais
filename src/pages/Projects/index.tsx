import React from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {ContainerPage, Container, Subtitle} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';
import CardProjects from '../../components/CardProjects';
import Modal from '../../components/Modal';

const projectsFields = [
  {
    title: 'Education',
    src: require('../../assets/img/abra-o-livro.png'),
  },
  {
    title: 'Food',
    src: require('../../assets/img/noodle.png'),
  },
  {
    title: 'Bath',
    src: require('../../assets/img/shower.png'),
  },
  {
    title: 'Support',
    src: require('../../assets/img/support.png'),
  },
];

const Projects: React.FC = () => {
  return (
    <ContainerPage>
      <ScrollView>
        <View>
          <Title> Projects </Title>
          <Subtitle>
            It is a program aimed at underprivileged children from communities
            in Recife, where it aims to stimulate their intellectual and
            psychological development.
          </Subtitle>
        </View>

        {projectsFields.map(({title, src}, key) => (
          <Container key={key}>
            <CardProjects title={title} src={src} />
          </Container>
        ))}

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
      </ScrollView>
    </ContainerPage>
  );
};

export default Projects;
