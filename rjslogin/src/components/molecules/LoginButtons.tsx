import { ButtonExample, ButtonText } from '../atoms/ButtonA';
import styled from 'styled-components';

const ButtonsView = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface ButtonsProps {
    OnPressSingIn : () => void;
    OnPressRegister : () => void;
}

const LoginButtons = ({OnPressSingIn, OnPressRegister}: ButtonsProps) => {
  return (
    <ButtonsView>
      <ButtonExample onClick={OnPressSingIn}>
        <ButtonText>Sign In</ButtonText>
      </ButtonExample>
      <ButtonExample onClick={OnPressRegister}>
        <ButtonText>Register</ButtonText>
      </ButtonExample>
    </ButtonsView>
  );
};

export default LoginButtons;
