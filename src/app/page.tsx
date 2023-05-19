'use client';
import TopBar from '@/components/TopBar';
import Equalizer from '@/Views/Waves';

import style from './page.module.css';

// TO-DO: solve autoplay problem for Chrome
export default function Home() {
  return (
    <div className={style.main}>
      <audio autoPlay loop src="/saturn.mp3" />
      <TopBar />
      <Equalizer />
    </div>
  );
}
