'use client';
import React from 'react';

import * as S from './TopBar.styles';

const options = [
  {
    name: 'Home',
    href: '/#home',
  },
  {
    name: 'Expertise',
    href: '/#expertise',
  },
  {
    name: 'Projetos',
    href: '/#projects',
  },
  {
    name: 'Experiências',
    href: '/#experiences',
  },
  {
    name: 'Contato',
    href: '/#contact',
  },
];

const TopBar: React.FC = () => {
  return (
    <S.Topbar>
      {options.map((element) => (
        <S.Sections key={element.href} href={element.href}>
          {element.name}
        </S.Sections>
      ))}
    </S.Topbar>
  );
};

export default TopBar;
