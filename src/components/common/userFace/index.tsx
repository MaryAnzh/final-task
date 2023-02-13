import uknownUser from '@/assets/uknownUser.png';

import { FC, useEffect, useState } from 'react';

import IUserFace from '@/interfaces/userFace';

import { Avatar, Container, Name, Wrapper } from './styled';

const UserFace: FC<IUserFace> = ({ href, name }) => {
  const [err, setError] = useState(false);
  const onError = () => {
    setError(true);
  };

  useEffect(() => {
    fetch(href).then((res) => {
      if (!res.ok) {
        onError();
      }
    });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Avatar src={err ? uknownUser.src : href} onError={onError} />
        <Name>{name}</Name>
      </Container>
    </Wrapper>
  );
};

export default UserFace;
