'use client';
import React, { useState, useEffect } from 'react';
import Typewriter from '@/components/Typewriter';
import { delay } from '@/utils/delay';

import * as S from './Main.styles';

const content = [
  {
    mark: 'aboutme',
    text: '',
    ident: 0,
  },
  {
    mark: 'location',
    text: 'Recife, Pernambuco',
    ident: 2,
  },
  {
    mark: 'email',
    text: 'josebasiliosilvaneto@gmail.com',
    ident: 2,
  },
  {
    mark: 'linkedin',
    text: 'linkedin.com/in/josebasilio',
    ident: 2,
  },
  {
    mark: 'github',
    text: 'github.com/josebasilioo',
    ident: 2,
  },
  {
    mark: 'education',
    text: 'Universidade Federal de Pernambuco (UFPE)',
    ident: 2,
  },
  {
    mark: 'undergraduate course',
    text: '',
    ident: 4,
  },
  {
    mark: '',
    text: 'Bachelors in Computer Engineering (Aug 2020 – Jul 2025)',
    ident: 6,
  },
  {
    mark: 'monitor',
    text: '',
    ident: 4,
  },
  {
    mark: '',
    text: 'Computational Language Paradigms',
    ident: 6,
  },
  {
    mark: '',
    text: 'Eletronic Computing (C Language)',
    ident: 6,
  },
  {
    mark: 'experience',
    text: '',
    ident: 4,
  },
  {
    mark: 'Cloud Operations Intern at Valcann (Nov 2023 – Present)',
    text: '',
    ident: 6,
  },
  {
    mark: '',
    text: 'Managed cloud environments for 20+ clients',
    ident: 8,
  },
  {
    mark: '',
    text: 'Automated and optimized AWS services',
    ident: 8,
  },
  {
    mark: 'Front-end Engineer at aca.so (Jun 2021 – Dec 2022)',
    text: '',
    ident: 6,
  },
  {
    mark: '',
    text: 'Developed an educational platform and PWA',
    ident: 8,
  },
  {
    mark: 'Software Manager at CITi (Jan 2021 – Jul 2021)',
    text: '',
    ident: 6,
  },
  {
    mark: '',
    text: 'Aligned project scope and deadlines',
    ident: 8,
  },
  {
    mark: '',
    text: 'Applied Scrum, managed team development',
    ident: 8,
  },
  {
    mark: 'Selection Process Coordinator at CITi (Sep 2020 – Dec 2020)',
    text: '',
    ident: 6,
  },
  {
    mark: '',
    text: 'Led selection process for 300 candidates',
    ident: 8,
  },
  {
    mark: '',
    text: 'Planned trainee program, managed training',
    ident: 8,
  },
  {
    mark: 'Full-Stack Developer at CITi (Jul 2020 – Jul 2021)',
    text: '',
    ident: 6,
  },
  {
    mark: '',
    text: 'Built platforms for psychologists a task managers and text editors for law companies',
    ident: 8,
  },
  {
    mark: 'skills',
    text: '',
    ident: 2,
  },
  {
    mark: 'languages',
    text: '',
    ident: 4,
  },
  {
    mark: '',
    text: '[JavaScript, TypeScript, C, Python, HTML, CSS]',
    ident: 6,
  },
  {
    mark: 'platforms',
    text: '',
    ident: 4,
  },
  {
    mark: '',
    text: '[ReactJS, NodeJS, Git, GitHub, MongoDB, PostgreSQL, Terraform]',
    ident: 6,
  },
  {
    mark: 'management',
    text: '',
    ident: 4,
  },
  {
    mark: '',
    text: '[SCRUM, Team Management, Event Organization]',
    ident: 6,
  },
  {
    mark: 'communication',
    text: '',
    ident: 4,
  },
  {
    mark: '',
    text: '[Portuguese, English B1]',
    ident: 6,
  },
  {
    mark: 'autor',
    text: 'José Basilio',
    ident: 0,
  },
  {
    mark: 'available',
    text: 'true',
    ident: 0,
  },
];

export default function Main() {
  const [visibleIndex, setVisibleIndex] = useState<number>(-1);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true); // Set the flag indicating that we are on the client

    const showTypewritersInSequence = async () => {
      const delays = content.map((_, i) => i * 10);

      for (let i = 0; i < delays.length; i++) {
        await delay(delays[i]);
        setVisibleIndex(i);
      }
    };

    showTypewritersInSequence();
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server to match initial client-side render
  }

  return (
    <S.Wrapper>
      {content.map((element, i) => {
        return (
          visibleIndex >= i && (
            <S.RowWrapper key={i}>
              <S.Number>{i + 1}</S.Number>
              <S.Ident number={element.ident} />
              <Typewriter mark={element.mark} text={element.text} />
            </S.RowWrapper>
          )
        );
      })}
    </S.Wrapper>
  );
}
