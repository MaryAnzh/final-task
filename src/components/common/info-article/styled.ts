import styled from "styled-components";

export const ArticleWrap = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 220px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

export const ArticleText = styled.p`
    max-width: 400px;
    width: 100%;
    font-family: ${({ theme }) => theme.titleFamily};
    color: ${({ theme }) => theme.themeColor.font};
    font-size: 1rem;

    &::first-letter {
        padding-left: 10px;
    }
`;

export const ArticleButtonWrap = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`;