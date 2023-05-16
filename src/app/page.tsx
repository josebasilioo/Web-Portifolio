import Image from 'next/image';
import styles from './page.module.css';

import TopBar from '@/components/TopBar';

export default function Home() {
  return (
    <div>
      <TopBar />
      <p>OIE</p>
    </div>
  );
}
