import React from 'react';

import styles from './topbar.module.css';

const options = [
  {
    name: 'Home',
    href: '/#home',
  },
  {
    name: 'Expertise',
    href: '/#expertise',
  },
  {
    name: 'Projetos',
    href: '/#projects',
  },
  {
    name: 'Experiências',
    href: '/#experiences',
  },
  {
    name: 'Contato',
    href: '/#contact',
  },
];

const TopBar: React.FC = () => {
  return (
    <section className={styles.topbar}>
      {options.map((element) => (
        <a key={element.href} className={styles.sections} href={element.href}>
          {element.name}
        </a>
      ))}
    </section>
  );
};

export default TopBar;
