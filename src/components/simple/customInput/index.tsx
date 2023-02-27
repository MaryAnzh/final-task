import { FC, ReactNode } from 'react';

import { Container, ErrorMessage, Input, P } from './styled';

interface CustomInput {
  type: string;
  name: string;
  svg?: ReactNode;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  err: string;
  valid: boolean;
  isNecessarily?: boolean;
}

const CustomInput: FC<CustomInput> = ({
  type,
  name,
  svg,
  value,
  placeholder,
  onChange,
  err,
  valid,
  isNecessarily = true,
}) => {
  return (
    <Container>
      {svg}
      <Input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {isNecessarily && <P>*</P>}
      {!valid && <ErrorMessage>{err}</ErrorMessage>}
    </Container>
  );
};

export default CustomInput;
