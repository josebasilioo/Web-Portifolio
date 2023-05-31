'use client';
import React from 'react';

import * as S from './TopBar.styles';

const options = [
  {
    name: 'Home',
    href: '/portifolio/#home',
  },
  {
    name: 'Expertise',
    href: '/portifolio/#expertise',
  },
  {
    name: 'Experiências',
    href: '/portifolio/#experiences',
  },
  {
    name: 'Contato',
    href: '/portifolio/#contact',
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
