import Link from 'next/link'
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
    ThirdRowCopyright,
    SecondRowSocialImage,
    SecondRowRightPart,
    SecondRowRightPartCol,
    SecondRowRightPartColTitle,

} from './styled'


const navList = ['about', 'contacts', 'authorization'];

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
                        src="/logo-light.svg"
                        alt="Team Logo"
                        width={59 * 1.5}
                        height={18 * 1.5}
                    />
                    <SecondRowText>
                        Created by Team of creative &quot;Front-Back&quot; developers as a final task specially for Rolling Scopes Front-End School 2022Q3
                    </SecondRowText>

                    <SecondRowSocials>
                        <SecondRowSocial href="https://github.com/MaryAnzh/final-task" target="_blank">
                            <SecondRowSocialImage src="/github.png" />
                        </SecondRowSocial>
                    </SecondRowSocials>
                </SecondRowLeftPart>

                <SecondRowRightPart>
                    <SecondRowRightPartCol>
                        <SecondRowRightPartColTitle>Quick links</SecondRowRightPartColTitle>
                        {
                            navList.map((route: string): JSX.Element => (
                                <Link href={route} key={route} className="nav-item">{route}</Link>
                            ))
                        }
                    </SecondRowRightPartCol>
                    <SecondRowRightPartCol>
                        <SecondRowRightPartColTitle>Service</SecondRowRightPartColTitle>

                    </SecondRowRightPartCol>
                    <SecondRowRightPartCol>
                        <SecondRowRightPartColTitle>Contact us</SecondRowRightPartColTitle>

                    </SecondRowRightPartCol>
                </SecondRowRightPart>
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
