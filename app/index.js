import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonText, SliderArea, StyledContainer, StyledLogo, Title } from './styles';
import logo from '../assets/images/logo.png';
import Slider from '@react-native-community/slider';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');

  function generatePassword() {
    let password = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
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
      <TouchableOpacity
        onPress={generatePassword}
        style={{ width: 250, backgroundColor: '#392de9', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 40 }}
      >
        <ButtonText>Gerar senha</ButtonText>
      </TouchableOpacity>
    </StyledContainer>
  );
}
