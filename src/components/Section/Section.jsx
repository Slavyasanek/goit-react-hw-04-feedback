import { Container, SectionStyle, SectionTitle } from './Section.styled';

export const Section = ({children, title}) => {
    return (
        <SectionStyle>
            <Container>
                {title && (<SectionTitle>{title}</SectionTitle>)}
                {children}
            </Container>
        </SectionStyle>
    )
}