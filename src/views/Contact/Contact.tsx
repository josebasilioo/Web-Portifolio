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
          Você pode se conectar comigo através do{' '}
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
          , ou via{' '}
          <S.Link href="mailto:josebasiliosilvaneto@gmail.com" target="_blank">
            Email
          </S.Link>
          .
        </S.Title>
      </S.TitleContent>

      <S.ContactContent>
        <S.Subtitle>OLÁ! :{')'}</S.Subtitle>
        <S.FilesContent>
          <S.Box>
            <S.Reference>LINKEDIN</S.Reference>
            <S.Reference>
              <S.Bold
                href="https://www.linkedin.com/in/josebasilio/"
                target="_blank"
              >
                /in/josebasilio
              </S.Bold>
            </S.Reference>
          </S.Box>
          <S.Box>
            <S.Reference>GITHUB</S.Reference>
            <S.Reference>
              <S.Bold href="https://github.com/josebasilioo" target="_blank">
                github.com/josebasilioo
              </S.Bold>
            </S.Reference>
          </S.Box>
          <S.Box>
            <S.Reference>EMAIL</S.Reference>
            <S.Reference>
              <S.Bold
                href="mailto:josebasiliosilvaneto@gmail.com"
                target="_blank"
              >
                josebasiliosilvaneto@gmail.com
              </S.Bold>
            </S.Reference>
          </S.Box>
          <S.Box>
            <S.Reference>CURRÍCULO</S.Reference>
            <S.Reference>
              <S.Bold>DOWNLOAD PDF</S.Bold>
            </S.Reference>
          </S.Box>
        </S.FilesContent>
        <S.TitleContent>
          <S.Bold>Made with &hearts; by @ José Basilio</S.Bold>
        </S.TitleContent>
      </S.ContactContent>
    </S.Section>
  );
};

export default Contact;
