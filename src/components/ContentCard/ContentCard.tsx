import React from 'react';
import Image from 'next/image';

import Tag from '@/components/Tag';

import Location from './assets/location-pin-svgrepo-com.svg';
import Link from './assets/link-round-1110-svgrepo-com.svg';

import * as S from './ContentCard.styles';

type Props = {
  type: string;
  occupation: string;
  link: string;
  name: string;
  text: string;
  image: string;
  date: string;
  tags: string[];
};

export interface ContentCardProps {
  content: Props;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <S.Card
      key="content-card"
      initial={{ height: 0, margin: 0 }}
      animate={{ height: 'fit-content', margin: '8px 0' }}
      exit={{ height: 0, margin: 0 }}
    >
      <S.Grid>
        <S.TextContent>
          <S.RowGrid>
            <Image alt="Location Icon" src={Location} width={20} height={20} />
            <S.References>{content.type}</S.References>

            <span style={{ width: '20px' }} />

            <Image alt="Link Icon" src={Link} width={20} height={20} />
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
