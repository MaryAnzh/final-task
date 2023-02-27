import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { getSession } from 'next-auth/react';
import Router from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

import { useStore } from '@/context';

import { RoutingEnum } from '@/data/constants/routing';

import { useForm } from '@/hooks/useForm';

import IFeedback from '@/interfaces/feedback';

import { FeedbackApi } from '@/pages/api';

import UserFace from '../common/userFace';
import {
  Button,
  ButtonContainer,
  Container,
  Feedbackfeld,
  Message,
  PopupButtonContainer,
  PopupButtonDark,
  PopupButtonLight,
  PopupContainer,
  Slide,
  SliderContainer,
  Title,
  Wrapper,
} from './styled';

const Feedbacks = () => {
  const [state, dispatch] = useStore();
  const { authorization } = state;
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
  const [options, setOptions] = useState({
    initial: 0,
    loop: false,
    slides: {
      perView: 4,
      spacing: 20,
    },
    // rtl: true,
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
  const initialValue = { feedback: '' };
  const { values, handleChange, setValues } = useForm<{ feedback: string }>(
    initialValue,
  );
  const [open, setOpen] = useState(false);
  /* eslint-disable */
  useEffect(() => {
    FeedbackApi.getAllFeedbacks()
      .then(({ data }) => {
        setFeedbacks(data.reverse());
        instanceRef.current?.update();
      })
      .catch((err) => console.log(err));
  }, []);
  /* eslint-enable */

  useEffect(() => instanceRef.current?.update(), [feedbacks]);

  const clear = () => {
    setValues(initialValue);
  };

  const sendFeedback = async (e: FormEvent) => {
    e.preventDefault();
    await getSession()
      .then((session) => {
        return FeedbackApi.createFeedback({
          content: values.feedback,
          avatar: session?.user?.image as string,
          owner: session?.user?.name as string,
        });
      })
      .then((res) => {
        setFeedbacks(res.data.reverse());
        setOpen(false);
      })
      .catch((e) => console.log(e));
  };

  const openPopup = () => {
    if (!authorization) {
      Router.push(RoutingEnum.login);
    } else {
      setOpen(true);
    }
  };

  const closePopup = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Feedbacks</Title>
        <ButtonContainer>
          <Button onClick={instanceRef.current?.prev}>❮</Button>
          <Button onClick={instanceRef.current?.next}>❯</Button>
        </ButtonContainer>
      </Wrapper>
      <SliderContainer ref={sliderRef} className={'keen-slider'}>
        {feedbacks &&
          feedbacks.map(({ owner, image, content }) => {
            return (
              <Slide className={'keen-slider__slide'} key={owner}>
                <UserFace href={image} name={owner} />
                <Message>{content}</Message>
              </Slide>
            );
          })}
      </SliderContainer>
      <PopupButtonLight onClick={openPopup}>
        Оставьте свой отзыв
      </PopupButtonLight>

      <Popup
        open={open}
        closeOnDocumentClick
        modal
        onClose={closePopup}
        position="right center"
      >
        <PopupContainer>
          <Feedbackfeld
            value={values.feedback}
            onChange={handleChange}
            name="feedback"
            cols={50}
            rows={8}
            placeholder="Оставьте свой отзыв, нам это очень важно..."
          ></Feedbackfeld>
          <PopupButtonContainer>
            <PopupButtonLight onClick={sendFeedback}>
              Отправить отзыв
            </PopupButtonLight>
            <PopupButtonDark onClick={clear}>Очистить форму</PopupButtonDark>
          </PopupButtonContainer>
        </PopupContainer>
      </Popup>
    </Container>
  );
};

export default Feedbacks;
