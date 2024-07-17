'use client';
import React, { useState } from 'react';

import * as S from './TopBar.styles';

const production = process.env.REACT_APP_ENV === 'production';

const options = [
  {
    name: 'about.yaml',
    href: production ? '/portifolio/#home' : '/#home',
  },
  {
    name: 'Expertise',
    href: production ? '/portifolio/#expertise' : '/#expertise',
  },
];

const TopBar: React.FC = () => {
  const [current, setCurrent] = useState({
    active: 0,
    label: 'about.yaml',
  });

  return (
    <>
      <S.Topbar>
        <S.FitContent>
          {options.map((element, i) => (
            <S.Sections
              active={i == current.active}
              onClick={() => setCurrent({ active: i, label: element.name })}
              draggable
              key={element.href}
            >
              <S.Label active={i == current.active}>{element.name}</S.Label>
            </S.Sections>
          ))}
        </S.FitContent>
        <S.FitContent>
          <p>oie</p>
        </S.FitContent>
      </S.Topbar>
      <S.ChildrenBar>
        <S.Label>{current.label}</S.Label>
      </S.ChildrenBar>
    </>
  );
};

export default TopBar;
