import React from 'react';

import * as S from './Experiences.styles';

import Tag from '@/components/Tag';

interface ExperienceProps {
  id: string;
}

const Experiences: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <S.ExperienceSection id={id}>
      <Tag content="Javascript" />
      <Tag content="Typescript" />
      <Tag content="ReactJS" />
      <Tag content="Gerenciamento de Pessoas" />
      <Tag content="Gestão de Equipes" />
    </S.ExperienceSection>
  );
};

export default Experiences;
