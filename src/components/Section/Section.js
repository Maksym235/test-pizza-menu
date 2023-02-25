import { SectionStyled, Title } from './Section.styled';
import { CiPizza } from 'react-icons/ci';

export function Section({ title, children }) {
  return (
    <SectionStyled>
      {title && (
        <Title>
          {title} <CiPizza />
        </Title>
      )}
      {children}
    </SectionStyled>
  );
}
