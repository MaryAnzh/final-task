import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';

import IFeedback from '@/interfaces/feedback';

import { FeedbackApi } from '@/pages/api';

import UserFace from '../common/userFace';
import {
  Button,
  ButtonContainer,
  Container,
  Message,
  Slide,
  SliderContainer,
  Title,
  Wrapper,
} from './styled';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
  const [options, setOptions] = useState({
    initial: 0,
    loop: false,
    slides: {
      perView: 4,
      spacing: 10,
    },
    rtl: true,
    breakpoints: {
      '(max-width: 1000px)': {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      '(max-width: 700px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      '(max-width: 450px)': {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
  });
  const [sliderRef, instanceRef] = useKeenSlider(options);
  useEffect(() => {
    FeedbackApi.getAllFeedbacks()
      .then(({ data }) => {
        setFeedbacks(data);
        instanceRef.current?.update();
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Feedbacks</Title>
        <ButtonContainer>
          <Button onClick={instanceRef.current?.next}>❮</Button>
          <Button onClick={instanceRef.current?.prev}>❯</Button>
        </ButtonContainer>
      </Wrapper>
      <SliderContainer ref={sliderRef} className={'keen-slider'}>
        {feedbacks &&
          feedbacks.map(({ owner, avatar, content }) => (
            <Slide className={'keen-slider__slide'}>
              <UserFace href={avatar} name={owner} />
              <Message>{content}</Message>
            </Slide>
          ))}
      </SliderContainer>
    </Container>
  );
};

export default Feedbacks;
