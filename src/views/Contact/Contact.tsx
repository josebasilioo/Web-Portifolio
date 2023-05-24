import React from 'react';

import * as S from './Contact.styles';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <S.Section id={id}>
      <S.TitleContent>
        <S.Title>
          You can connect with me on,{' '}
          <S.Link
            href="https://www.linkedin.com/in/josebasilio/"
            target="_blank"
          >
            LinkedIn
          </S.Link>
          ,{' '}
          <S.Link href="https://github.com/josebasilioo" target="_blank">
            GitHub
          </S.Link>
          ,{' '}
          <S.Link
            href="https://www.instagram.com/basi______________/"
            target="_blank"
          >
            Instagram
          </S.Link>
          , or via{' '}
          <S.Link href="mailto:josebasiliosilvaneto@gmail.com" target="_blank">
            Email
          </S.Link>
          .
        </S.Title>
      </S.TitleContent>
      <S.Subtitle>OLÁ! :{')'}</S.Subtitle>
      <S.FilesContent>
        <S.Box>
          <S.Reference>LINKEDIN</S.Reference>
          <S.Reference>
            <S.Link
              href="https://www.linkedin.com/in/josebasilio/"
              target="_blank"
            >
              /in/josebasilio
            </S.Link>
          </S.Reference>
        </S.Box>
        <S.Box>
          <S.Reference>GITHUB</S.Reference>
          <S.Reference>
            <S.Link href="https://github.com/josebasilioo" target="_blank">
              github.com/josebasilioo
            </S.Link>
          </S.Reference>
        </S.Box>
        <S.Box>
          <S.Reference>INSTAGRAM</S.Reference>
          <S.Reference>
            <S.Link
              href="https://www.instagram.com/basi______________/"
              target="_blank"
            >
              @basi______________
            </S.Link>
          </S.Reference>
        </S.Box>
        <S.Box>
          <S.Reference>EMAIL</S.Reference>
          <S.Reference>
            <S.Link
              href="mailto:josebasiliosilvaneto@gmail.com"
              target="_blank"
            >
              josebasiliosilvaneto@gmail.com
            </S.Link>
          </S.Reference>
        </S.Box>
        <S.Box>
          <S.Reference>CURRÍCULO</S.Reference>
          <S.Reference>
            <S.Link>DOWNLOAD PDF</S.Link>
          </S.Reference>
        </S.Box>
      </S.FilesContent>
      <S.TitleContent>
        <S.Link>Made with 3 by @ José Basilio</S.Link>
      </S.TitleContent>
    </S.Section>
  );
};

export default Contact;
