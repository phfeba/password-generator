import { useState } from 'react';
import { Modal } from 'react-native';
import { ButtonText, SliderArea, StyledContainer, StyledLogo, Title, TouchableButton } from './styles';
import logo from '../../../../assets/images/logo.png';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../../../components/modal';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <StyledContainer>
      <StyledLogo source={logo} />
      <Title>{size} caracteres</Title>
      <SliderArea>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#392de9'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </SliderArea>
      <TouchableButton onPress={generatePassword}>
        <ButtonText>Gerar senha</ButtonText>
      </TouchableButton>
      <Modal
        visible={modalVisible}
        animationType='fade'
        transparent={true}
      >
        <ModalPassword
          password={passwordValue}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </StyledContainer>
  );
}
