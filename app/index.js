import { TouchableOpacity } from 'react-native';
import { ButtonText, SliderArea, StyledContainer, StyledLogo, Title } from './styles';
import logo from '../assets/images/logo.png';
import Slider from '@react-native-community/slider';

export default function App() {
  return (
    <StyledContainer>
      <StyledLogo source={logo} />
      <Title></Title>
      <SliderArea>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          thumbTintColor='#392de9'
        />
      </SliderArea>
      <TouchableOpacity style={{ width: 250, backgroundColor: '#392de9', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 40 }}>
        <ButtonText>Gerar senha</ButtonText>
      </TouchableOpacity>
    </StyledContainer>
  );
}
