import React from 'react';

import * as S from './Experiences.styles';

import ContentCard from '@/components/ContentCard';

interface ExperienceProps {
  id: string;
}

const data = [
  {
    type: 'Online',
    link: 'https://aca.so',
    name: 'aca.so',
    text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    tags: ['Javascript', 'Typescript', 'ReactJS', 'Data Analytics', 'Axios'],
    image:
      'https://img.freepik.com/vetores-premium/logo-do-tik-tok_578229-290.jpg',
  },
  {
    type: 'Presencial',
    link: 'https://aca.so',
    name: 'aca.so',
    text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    tags: ['Javascript', 'Typescript', 'ReactJS', 'Data Analytics', 'Axios'],
    image:
      'https://img.freepik.com/vetores-premium/logo-do-tik-tok_578229-290.jpg',
  },
  {
    type: 'Híbrido',
    link: 'https://aca.so',
    name: 'aca.so',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    tags: ['Javascript', 'Typescript', 'ReactJS', 'Data Analytics', 'Axios'],
    image:
      'https://img.freepik.com/vetores-premium/logo-do-tik-tok_578229-290.jpg',
  },
];

const Experiences: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <S.ExperienceSection id={id}>
      <S.ExperienceContent>
        <>
          {/* <ContentCard content={data[0]} /> */}
          {data.map((content, i) => (
            <ContentCard key={`${i} + ${content.name}`} content={content} />
          ))}
        </>
      </S.ExperienceContent>
    </S.ExperienceSection>
  );
};

export default Experiences;
