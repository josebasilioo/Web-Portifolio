'use client';
import React, { useState } from 'react';

import ContentCard from '../ContentCard';
import { ContentCardProps } from '../ContentCard/ContentCard';

import * as S from './CardSelector.styles';
import { AnimatePresence } from 'framer-motion';

const CardSelector: React.FC<ContentCardProps> = ({ content }) => {
  const [focused, setFocused] = useState(false);

  return (
    <S.SelectorContent tabIndex={1} onBlur={() => setFocused(false)}>
      <S.Selector onClick={() => setFocused(!focused)}>
        <S.Content>
          <S.Text>
            {content.occupation} {'@'} {content.name}
          </S.Text>
        </S.Content>
        <S.Content>
          <S.Text>{content.date}</S.Text>
          <S.Hover
            focused={focused ? 1 : 0}
            onClick={() => setFocused(!focused)}
          >
            <S.Text>+</S.Text>
          </S.Hover>
        </S.Content>
      </S.Selector>
      <AnimatePresence>
        {focused && (
          <ContentCard key={`${1} + ${content.name}`} content={content} />
        )}
      </AnimatePresence>
    </S.SelectorContent>
  );
};

export default CardSelector;
