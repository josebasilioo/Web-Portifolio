'use client';
import React from 'react';

import * as S from './TopBar.styles';

const production = process.env.REACT_APP_ENV === 'production';

const options = [
  {
    name: 'Home',
    href: production ? '/portifolio/#home' : '/#home',
  },
  {
    name: 'Expertise',
    href: production ? '/portifolio/#expertise' : '/#expertise',
  },
  {
    name: 'Experiências',
    href: production ? '/portifolio/#experiences' : '/#experiences',
  },
  {
    name: 'Contato',
    href: production ? '/portifolio/#contact' : '/#contact',
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
