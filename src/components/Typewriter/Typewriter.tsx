'use client';
import React from 'react';

import * as S from './Typewriter.styles';

interface TypewriterProps {
  mark: string;
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ mark, text }) => {
  return (
    <S.Typing number={mark.length + text.length + 1}>
      <S.Variable>{mark}</S.Variable>
      {mark ? ':' : '-'} <S.Response>{text}</S.Response>
    </S.Typing>
  );
};

export default Typewriter;
