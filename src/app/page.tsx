'use client';
import Main from '@/views/Main';
import Experiences from '@/views/Experiences';
import Expertise from '@/views/Expertise';
import Contact from '@/views/Contact';

import * as S from './Page.styles';

// TO-DO: solve autoplay problem for Chrome
export default function Home() {
  return (
    <S.Layout>
      <Main id="home" />
      <Expertise id="expertise" />
      <Experiences id="experiences" />
      <Contact id="contact" />
    </S.Layout>
  );
}
