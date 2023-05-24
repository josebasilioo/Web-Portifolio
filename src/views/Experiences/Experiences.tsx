import React from 'react';

import * as S from './Experiences.styles';

import CardSelector from '@/components/CardSelector';

interface ExperienceProps {
  id: string;
}

const data = [
  {
    type: 'Online',
    link: 'https://aca.so',
    occupation: 'Engenheiro de Software',
    name: 'aca.so',
    text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    tags: ['Javascript', 'Typescript', 'ReactJS', 'Data Analytics', 'Axios'],
    image:
      'https://img.freepik.com/vetores-premium/logo-do-tik-tok_578229-290.jpg',
    date: '2021 - 2022',
  },
  {
    type: 'Presencial',
    link: 'https://aca.so',
    occupation: 'Engenheiro de Software',
    name: 'aca.so',
    text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    tags: ['Javascript', 'Typescript', 'ReactJS', 'Data Analytics', 'Axios'],
    image:
      'https://img.freepik.com/vetores-premium/logo-do-tik-tok_578229-290.jpg',
    date: '2021 - 2022',
  },
  {
    type: 'Híbrido',
    link: 'https://aca.so',
    occupation: 'Engenheiro de Software',
    name: 'aca.so',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    tags: ['Javascript', 'Typescript', 'ReactJS', 'Data Analytics', 'Axios'],
    image:
      'https://img.freepik.com/vetores-premium/logo-do-tik-tok_578229-290.jpg',
    date: '2021 - 2022',
  },
  {
    type: 'Híbrido',
    link: 'https://aca.so',
    occupation: 'Engenheiro de Software',
    name: 'aca.so',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    tags: ['Javascript', 'Typescript', 'ReactJS', 'Data Analytics', 'Axios'],
    image:
      'https://img.freepik.com/vetores-premium/logo-do-tik-tok_578229-290.jpg',
    date: '2021 - 2022',
  },
];

const Experiences: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <S.ExperienceSection id={id}>
      <S.SectionTitle>Experiência Profissional</S.SectionTitle>
      <S.ExperienceContent>
        {data.map((content, i) => (
          <CardSelector key={i.toString()} content={content} />
        ))}
      </S.ExperienceContent>
    </S.ExperienceSection>
  );
};

export default Experiences;
