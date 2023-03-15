import {ButtonExample, ButtonText} from '../atoms/ButtonA';
import styled from 'styled-components';

const ButtonsView = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface ButtonsProps {
  OnCreateAccount: () => void;
  OnPressToLogin: () => void;
}

const RegisterButtons = ({OnCreateAccount, OnPressToLogin}: ButtonsProps) => {
  return (
    <ButtonsView>
      <ButtonExample onClick={OnCreateAccount}>
        <ButtonText>Create</ButtonText>
      </ButtonExample>
      <ButtonExample onClick={OnPressToLogin}>
        <ButtonText>Go Login</ButtonText>
      </ButtonExample>
    </ButtonsView>
  );
};

export default RegisterButtons;
