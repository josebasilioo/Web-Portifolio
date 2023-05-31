import React from 'react';
import Image from 'next/image';

import * as S from './Expertise.styles';

import Branch from './assets/branch.svg';
import Tech from './assets/tech.svg';
import Student from './assets/student.svg';

interface ExpertiseProps {
  id: string;
}

const Expertise: React.FC<ExpertiseProps> = ({ id }) => {
  return (
    <S.ExpertiseSection id={id}>
      <S.ColoredContainer />
      <S.SectionTitle>Olá, Eu sou o Basi. Prazer em conhecer!</S.SectionTitle>
      <S.ExpertisesBox>
        <S.Column>
          <S.Span>
            <Image
              alt="Imagem de uma branch"
              src={Branch}
              style={{ width: '50%', height: '50%' }}
            />
          </S.Span>
          <S.Title>Liderança</S.Title>
        </S.Column>
        <S.Column>
          <S.Span>
            <Image
              alt="Imagem representando Tech"
              src={Tech}
              style={{ width: '50%', height: '50%' }}
            />
          </S.Span>
          <S.Title>Desenvolvimento Web</S.Title>
        </S.Column>
        <S.Column>
          <S.Span>
            <Image
              alt="Imagem de um chapéu de Estudante"
              src={Student}
              style={{ width: '50%', height: '50%' }}
            />
          </S.Span>
          <S.Title>Estudante</S.Title>
        </S.Column>
      </S.ExpertisesBox>
    </S.ExpertiseSection>
  );
};

export default Expertise;
