import React, {useState} from 'react';
import {View, Alert, Modal, StyleSheet, Text} from 'react-native';
import Button from '../Button';

interface ModalProps {
  title: string;
  children?: string | any;
}

const ModalGeneric = ({title, children}: ModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={styles.centeredView}>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <Text
                    style={styles.alignRight}
                    onPress={() => setModalVisible(!modalVisible)}>
                    X
                  </Text>
                </View>
                {children}
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <Button
        type="primary"
        onPress={() => {
          setModalVisible(true);
        }}>
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  alignRight: {
    textAlign: 'right',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(20,0,0, 0.2)',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    // opacity: 100,
    borderRadius: 20,
    paddingBottom: 40,
    paddingTop: 15,
    paddingRight: 20,
    paddingLeft: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalGeneric;
