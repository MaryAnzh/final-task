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
    display: flex;
    justify-content: space-between;
`;

export const ArticleTitle = styled.h2`
    width: 400px;
    font-size: 2rem;
    color: ${({ theme }) => theme.themeColor.font};
    font-weight: 600;
    font-family: ${({ theme }) => theme.titleFamily};
`;

export const ArticleText = styled.p`
    width: 400px;
    font-family: ${({ theme }) => theme.titleFamily};
    color: ${({ theme }) => theme.themeColor.font};
    font-size: 1rem;

    &::first-letter {
        padding-left: 20px;
    }
`;