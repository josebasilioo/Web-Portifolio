'use client';
import React from 'react';

import * as S from './TopBar.styles';

const options = [
  {
    name: 'Home',
    href:
      process.env.REACT_APP_ENV === 'production'
        ? '/portifolio/#home'
        : '/#home',
  },
  {
    name: 'Expertise',
    href:
      process.env.REACT_APP_ENV === 'production'
        ? '/portifolio/#expertise'
        : '/#expertise',
  },
  {
    name: 'Experiências',
    href:
      process.env.REACT_APP_ENV === 'production'
        ? '/portifolio/#experiences'
        : '/#experiences',
  },
  {
    name: 'Contato',
    href:
      process.env.REACT_APP_ENV === 'production'
        ? '/portifolio/#contact'
        : '/#contact',
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
