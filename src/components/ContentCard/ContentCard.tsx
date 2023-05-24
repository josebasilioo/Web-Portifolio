import React from 'react';

import Tag from '@/components/Tag';

import * as S from './ContentCard.styles';

type Props = {
  type: string;
  link: string;
  name: string;
  text: string;
  image: string;
  tags: string[];
};

interface ContentCardProps {
  content: Props;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <S.Card>
      <S.Grid>
        <S.TextContent>
          <S.RowGrid>
            <S.References>{content.type}</S.References>
            <S.References>
              <a href={content.link} target="_blank">
                {content.name}
              </a>
            </S.References>
          </S.RowGrid>
          <S.RowGrid>
            <S.Text>{content.text}</S.Text>
          </S.RowGrid>
          <S.RowGrid>
            {content.tags?.map((tag) => (
              <Tag key={`${Math.random()} + ${tag}`} content={tag} />
            ))}
          </S.RowGrid>
        </S.TextContent>
        <S.ImageContent>
          <S.Image alt={`Imagem de ${content.name}`} src={content.image} />
        </S.ImageContent>
      </S.Grid>
    </S.Card>
  );
};

export default ContentCard;
