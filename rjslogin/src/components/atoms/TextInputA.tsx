import styled from "styled-components";

interface Props {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: {target: {value: React.SetStateAction<string>;};}) => void;
  onFocus: () => void;
}

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: white;
  border: none;
  border-radius: 3px;
  border-bottom: 1px solid #000000;
  ::placeholder {
    color: black;
  }
  text-decoration-color: black;
`;

const TextInputA = ({ name, placeholder, type, value, onChange, onFocus }: Props) => {
  return (
    <Input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

export default TextInputA;
