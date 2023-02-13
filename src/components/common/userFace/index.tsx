import { FC, useEffect, useState } from 'react';

import unknownUser from '@/assets/unknownUser.png';

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
        <Avatar src={err ? unknownUser.src : href} onError={onError} />
        <Name>{name}</Name>
      </Container>
    </Wrapper>
  );
};

export default UserFace;
