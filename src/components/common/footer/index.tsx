import {
    FooterStyled,
    FooterContainer,
    FooterLine,
    FirstRowLeft,
    FirstRowTitle,
    FirstRow,
    FirstRowButton,
    FirstRowText,
    FirstRowInputGroup,
    FirstRowInput,
    SecondRowImage,
    SecondRowText,
    SecondRow,
    SecondRowLeftPart,
    SecondRowSocials,
    SecondRowSocial,
    ThirdRow,
    ThirdRowCopyright
} from './styled'

const Footer = (): JSX.Element => (
    <FooterStyled>
        <FooterContainer>
            <FirstRow>
                <FirstRowLeft>
                    <FirstRowTitle>Subscribe to our newsletter</FirstRowTitle>
                    <FirstRowText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at consequuntur
                        delectus distinctio, esse ex excepturi facere iure officia voluptatum!</FirstRowText>
                </FirstRowLeft>

                <FirstRowInputGroup>
                    <FirstRowInput type="text" placeholder="Your email"/>
                    <FirstRowButton>Send</FirstRowButton>
                </FirstRowInputGroup>

            </FirstRow>
        </FooterContainer>

        <FooterLine/>

        <FooterContainer>
            <SecondRow>
                <SecondRowLeftPart>
                    <SecondRowImage
                        src="/logo.svg"
                        alt="Team Logo"
                        width={59 * 1.5}
                        height={18 * 1.5}
                    />
                    <SecondRowText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at, debitis ducimus esse iusto
                        placeat quae quod sint tempora voluptate!
                    </SecondRowText>

                    <SecondRowSocials>

                    </SecondRowSocials>

                </SecondRowLeftPart>


            </SecondRow>
        </FooterContainer>

        <FooterLine/>

        <FooterContainer>
            <ThirdRow>
                <ThirdRowCopyright>Copyright © 2023 | All rights reserved</ThirdRowCopyright>
            </ThirdRow>
        </FooterContainer>
    </FooterStyled>
)

export default Footer
