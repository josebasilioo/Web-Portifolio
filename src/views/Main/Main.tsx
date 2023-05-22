import TopBar from '@/components/TopBar';
import Waves from '@/components/Waves';

import * as S from './Main.styles';

// TO-DO: solve autoplay problem for Chrome
export default function Main({ id }: { id: string }) {
  return (
    <S.Section id={id}>
      <audio autoPlay loop src="/saturn.mp3" />
      <TopBar />
      <S.ContentBox
        key="content-box"
        initial={{ opacity: 0, y: -50, z: -50 }}
        animate={{ opacity: 1, y: 0, z: 0 }}
        exit={{ opacity: 0, y: -50, z: -50 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <S.Title>José Basilio</S.Title>
        <S.Subtitle>Testamento nome, testando mais e teste</S.Subtitle>
      </S.ContentBox>
      <Waves />
    </S.Section>
  );
}
