import styled from 'styled-components';

export const ArticleWrap = styled.div`
    max-width: 1200px;
    width: 100%;
    min-height: 220px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: smoothAppear;

  @keyframes smoothAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ArticleInfo = styled.article`
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ArticleTitle = styled.h2`
    max-width: 400px;
    width: 100%;
    font-size: 2rem;
    color: ${({ theme }) => theme.themeColor.font};
    font-weight: 600;
    font-family: ${({ theme }) => theme.titleFamily};

    @media (max-width: 800px) {
        padding-bottom: 30px;
    }
`;

export const ArticleText = styled.div`
    max-width: 500px;
    width: 100%;
`;

export const ArticleTextP = styled.p`
    font-family: ${({ theme }) => theme.titleFamily};
    color: ${({ theme }) => theme.themeColor.font};
    font-weight: 300;
    font-size: 1rem;
    padding-bottom: 10px;
    
    &::first-letter {
        padding-left: 10px;
    }
`;

export const ArticleButtonWrap = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`;
