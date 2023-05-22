import React from 'react';

import * as S from './Tag.styles';

interface Props {
  content: string;
}

const Tag: React.FC<Props> = ({ content }) => {
  return (
    <S.Tag>
      <S.Span>{content}</S.Span>
    </S.Tag>
  );
};

export default Tag;
