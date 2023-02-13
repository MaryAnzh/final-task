import { FC, ReactNode, useState } from 'react';

import { Container, ErrorMessage, Input } from './styled';

interface CustomInput {
  type: string;
  name: string;
  svg?: ReactNode;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  err: string;
  valid: boolean;
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
      {!valid && <ErrorMessage>{err}</ErrorMessage>}
    </Container>
  );
};

export default CustomInput;
