'use client';
import Main from '@/views/Main';

import * as S from './Page.styles';

// TO-DO: solve autoplay problem for Chrome
export default function Home() {
  return (
    <S.Layout>
      <Main id="home" />
    </S.Layout>
  );
}
