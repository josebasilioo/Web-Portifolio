import React from 'react';

import * as S from './Experiences.styles';

import Tag from '@/components/Tag';
import ContentCard from '@/components/ContentCard';

interface ExperienceProps {
  id: string;
}

const Experiences: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <S.ExperienceSection id={id}>
      <S.ExperienceContent>
        <Tag content="Javascript" />
        <Tag content="Typescript" />
        <Tag content="ReactJS" />
        <Tag content="Gerenciamento de Pessoas" />
        <Tag content="Gestão de Equipes" />
        <ContentCard />
      </S.ExperienceContent>
    </S.ExperienceSection>
  );
};

export default Experiences;
